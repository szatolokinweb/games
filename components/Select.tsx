import { FC, useEffect, useState } from "react";
import styled from "styled-components";

const Item = styled.li<Select.ItemProps>`
  margin-top: 5px;
  color: ${(props) => (props.selected && "red") || "black"};
`;

const Panel = styled.div<{ active: boolean }>`
  position: relative;
  z-index: 0;

  padding: 0 10px;
  width: 200px;
  height: 40px;
  display: flex;
  align-items: center;

  border: 1px solid ${({ active }) => (active && "black") || "gray"};
  border-radius: 10px;
`;

const List = styled.ul<Select.ListProps>`
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  right: 0;
  transform: translateY(${({ show }) => (show && "0") || "-10px"});

  padding: 10px;
  height: 150px;
  overflow-y: auto;
  pointer-events: ${({ show }) => (show && "all") || "none"};

  border: 1px solid black;
  border-radius: 10px;
  opacity: ${({ show }) => (show && 1) || 0};
  transition: 0.5s;
`;

const Value = styled.div<{ active: boolean }>`
  color: ${({ active }) => (active && "black") || "gray"};
  transition: 0.5s;
`;

const Clear = styled.li`
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const Select: FC<{
  items: Select.Item[];
  value: Select.Value;
  onChange: Function;
}> = ({ items, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("click", (event) => {
      const isSelect = event.target.closest("[data-select-panel]");

      if (!isSelect) {
        setIsOpen(false);
      }
    });
  }, [setIsOpen]);

  return (
    <Panel
      data-select-panel
      onClick={() => setIsOpen((isOpen) => !isOpen)}
      active={!!value}
    >
      <Value active={!!value}>
        {value ? items.find((item) => item.id === value)?.name : "Платформа"}
      </Value>
      <List show={isOpen}>
        {value && <Clear onClick={() => onChange(null)}>Очистить</Clear>}
        {items.map(({ id, name }) => (
          <Item key={id} selected={id === value} onClick={() => onChange(id)}>
            {name}
          </Item>
        ))}
      </List>
    </Panel>
  );
};
