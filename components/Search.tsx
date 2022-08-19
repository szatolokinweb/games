import { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  z-index: 0;
`;

const Input = styled.input`
  padding: 0 10px;
  padding-right: 50px;
  width: 100%;
  height: 40px;
  display: block;

  border: 1px solid black;
  border-radius: 10px;
`;

const Clear = styled.div<{ show: boolean }>`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);

  padding: 5px;
  pointer-events: ${({ show }) => (show && "all") || "none"};

  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  opacity: ${({ show }) => (show && 1) || 0};
  transition: 0.5s;
`;

export const Search: FC<{ value: string; onChange: Function }> = ({
  value,
  onChange,
}) => {
  return (
    <Wrapper>
      <Input
        value={value}
        onChange={({ target }) => onChange(target.value)}
        placeholder="Название игры"
      />
      <Clear show={!!value.trim()} onClick={() => onChange("")}>
        Очистить
      </Clear>
    </Wrapper>
  );
};
