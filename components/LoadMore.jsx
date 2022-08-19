import debounce from "lodash/debounce";
import { useCallback, useEffect, useRef } from "react";
import styled, { css } from "styled-components";

const buttonHover = css`
  background-color: #3eff8b;
  color: white;
`;

const Button = styled.button`
  margin: 50px auto 30px;
  padding: 0 20px;
  height: 40px;
  display: block;

  border: 3px solid #3eff8b;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: 250ms;

  &:hover {
    ${buttonHover}
  }

  ${(props) => props.active && buttonHover}
`;

export const LoadMore = ({ onChange, isLoading }) => {
  const buttonRef = useRef(null);

  const handleScroll = useCallback(
    debounce(() => {
      if (!isLoading) {
        const windowHeight = window.innerHeight;

        let buttonTop;
        if (buttonRef.current) {
          buttonTop = buttonRef.current.getBoundingClientRect().top;
        }

        if (windowHeight - (buttonTop || windowHeight) > 0) {
          onChange();
        }
      }
    }, 250),
    [buttonRef]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Button
      ref={buttonRef}
      onClick={() => onChange()}
      disabled={isLoading}
      active={isLoading}
    >
      {isLoading ? "..." : "Загрузить еще"}
    </Button>
  );
};
