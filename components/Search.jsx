import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  z-index: 0;

  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 0 20px;
  width: 100%;
  height: 40px;
  display: block;

  border: 3px solid black;
  border-radius: 10px;
  font-weight: bold;
  transition: 250ms;

  &:hover {
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  }

  &:focus {
    border-color: #3eff8b;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  }
`;

const Clear = styled.div`
  position: absolute;
  top: 50%;
  right: 7px;
  transform: translateY(-50%);

  height: 26px;
  padding: 0 5px;
  pointer-events: ${({ show }) => (show ? "all" : "none")};

  border: 3px solid black;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: 250ms;

  &:hover {
    background-color: #3eff8b;
    border-color: #3eff8b;
    color: white;
  }
`;

export const Search = ({ search, onChange }) => {
  const [value, setValue] = useState(search);

  useEffect(() => onChange(value.trim()), [value]);

  return (
    <Wrapper>
      <Input
        value={value}
        onChange={({ target }) => setValue(target.value)}
        placeholder="🔎 Search games"
      />
      <Clear show={search} onClick={() => setValue("")}>
        Clear
      </Clear>
    </Wrapper>
  );
};
