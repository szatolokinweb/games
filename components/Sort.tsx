import { FC, useState } from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
`;

const Item = styled.div<{ active: boolean }>`
  position: relative;
  z-index: 0;

  margin-right: 20px;
  padding: 5px;
  padding-right: 20px;
  user-select: none;

  border: 1px solid ${({ active }) => (active && "red") || "black"};
  border-radius: 5px;
  color: ${({ active }) => (active && "red") || "black"};
`;

const items: Sort.Value[] = [
  {
    value: null,
    name: "По-умолчанию",
  },
  {
    value: "rating",
    name: "Рейтинг",
  },
  {
    value: "released",
    name: "Дата релиза",
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
          {item.name}
          {index === active && <Dir>{getDir(value)}</Dir>}
        </Item>
      ))}
    </Row>
  );
};
