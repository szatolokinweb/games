import { FC } from "react";
import styled from "styled-components";

const Layout = styled.div<{ active: boolean }>`
  position: fixed;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: ${({ active }) => (active && "all") || "none"};

  background-color: rgba(0, 0, 0, 0.75);
  font-size: 100px;
  color: white;
  opacity: ${({ active }) => (active && 1) || 0};
  transition: 250ms;
`;

export const Loader: FC<{ isLoading: boolean }> = ({ isLoading }) => (
  <Layout active={isLoading}>...</Layout>
);
