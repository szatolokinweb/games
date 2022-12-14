import { useEffect, useState, useCallback } from "react";
import styled from "styled-components";

const Item = styled.li`
  margin-bottom: 10px;
  color: ${({ selected }) => (selected ? "#3eff8b" : "black")};
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
  cursor: pointer;
  transition: 250ms;

  &:hover {
    color: #3eff8b;
  }
`;

const Panel = styled.div`
  position: relative;
  z-index: 2;

  margin-bottom: 10px;
  padding: 0 20px;
  width: 300px;
  height: 40px;
  display: flex;
  align-items: center;

  border: 3px solid ${({ isOpen }) => (isOpen ? "#3eff8b" : "black")};
  border-radius: 10px;
  transition: 250ms;

  &:hover {
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  }
`;

const List = styled.ul`
  position: absolute;
  top: calc(100% + 10px);
  left: -3px;
  right: -3px;
  transform: translateY(${({ show }) => (show ? "0" : "-10px")});

  padding: 10px;
  height: 200px;
  overflow-y: auto;
  pointer-events: ${({ show }) => (show ? "all" : "none")};

  background-color: white;
  border: 3px solid #3eff8b;
  border-radius: 10px;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: 250ms;
`;

const Value = styled.div`
  color: ${({ active }) => (active ? "black" : "gray")};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  transition: 250ms;
`;

const Clear = styled.li`
  margin-bottom: 10px;
  padding: 0 10px;
  height: 26px;
  border: 3px solid black;
  border-radius: 5px;
  font-weight: bold;
  transition: 250ms;
  cursor: pointer;

  &:hover {
    background-color: #3eff8b;
    border-color: #3eff8b;
    color: white;
  }
`;

export const Select = ({ items, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWindowClick = useCallback(
    ({ target }) => !target.closest("[data-select-panel]") && setIsOpen(false),
    [setIsOpen]
  );

  const toggleIsOpen = useCallback(
    () => setIsOpen((prevIsOpen) => !prevIsOpen),
    [setIsOpen]
  );

  useEffect(() => {
    window.addEventListener("click", handleWindowClick);
    return () => window.removeEventListener("click", handleWindowClick);
  }, [setIsOpen]);

  return (
    <Panel data-select-panel onClick={toggleIsOpen} isOpen={isOpen}>
      <Value active={value}>
        {value ? items.find(({ id }) => id === value).name : "Platform"}
      </Value>
      <List show={isOpen}>
        {value && <Clear onClick={() => onChange(null)}>Clear</Clear>}
        {items.map(({ id, name }) => (
          <Item key={id} selected={id === value} onClick={() => onChange(id)}>
            {name}
          </Item>
        ))}
      </List>
    </Panel>
  );
};
