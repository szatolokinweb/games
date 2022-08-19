import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.25);
  font-size: 52px;
  color: white;
`;

export const Loader = () => <Wrapper>...</Wrapper>;
