import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: ${({ isLoading }) => (isLoading ? "all" : "none")};

  background-color: rgba(0, 0, 0, 0.75);
  font-size: 100px;
  color: white;
  opacity: ${({ isLoading }) => (isLoading ? 1 : 0)};
  transition: 250ms;
`;

export const Loader = ({ isLoading }) => (
  <Overlay {...{ isLoading }}>...</Overlay>
);
