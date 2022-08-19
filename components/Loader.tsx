import { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div<{ active: boolean }>`
  position: fixed;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: ${(props) => (props.active && "all") || "none"};

  background-color: rgba(0, 0, 0, 0.5);
  font-size: 100px;
  color: white;
  opacity: ${(props) => (props.active && 1) || 0};
  transition: 250ms;
`;

export const Loader: FC<{ active: boolean }> = ({ active }) => (
  <Wrapper active={active}>...</Wrapper>
);
