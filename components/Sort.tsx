import { FC, useState } from "react";
import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
`;

const Item = styled.div<{ active: boolean }>`
  position: relative;
  z-index: 0;

  margin-right: 20px;
  padding: 0 20px;
  height: 40px;
  display: flex;
  align-items: center;
  padding-right: 20px;
  user-select: none;

  border: 3px solid black;
  border-radius: 5px;
  color: black;
  cursor: pointer;
  transition: 250ms;

  ${({ active }) =>
    active &&
    css`
      font-weight: bold;
      color: white;
      background-color: #3eff8b;
      border-color: #3eff8b;
    `}

  &:hover {
    border-color: #3eff8b;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  }
`;

const items: Sort.Value[] = [
  {
    value: null,
    name: "Default",
  },
  {
    value: "-rating",
    name: "Rating",
  },
  {
    value: "-released",
    name: "Released",
  },
];

const Dir = styled.div`
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
`;

const toggleValue = (value: string | null) =>
  value ? (value[0] === "-" && value.slice(1)) || `-${value}` : null;

const getDir = (value: string | null) =>
  value ? (value[0] === "-" && "<") || ">" : "";

export const Sort: FC<{ value: string | null; onChange: Function }> = ({
  value,
  onChange,
}) => {
  const [active, setActive] = useState(0);

  return (
    <Row>
      {items.map((item, index) => (
        <Item
          active={index === active}
          key={index}
          onClick={() => {
            if (index === active) {
              onChange(toggleValue(value));
            } else {
              onChange(item.value);
            }
            setActive(index);
          }}
        >
          {item.name} {index === active && getDir(value)}
        </Item>
      ))}
    </Row>
  );
};
