import debounce from "lodash/debounce";
import { FC, useCallback, useEffect, useRef } from "react";
import styled from "styled-components";

const Button = styled.button`
  margin: 40px auto;
  padding: 0 10px;
  height: 40px;
  display: block;
`;

export const LoadMore: FC<{ onChange: Function; isLoading: boolean }> = ({
  onChange,
  isLoading,
}) => {
  const buttonRef = useRef(null);

  const handleScroll = useCallback(
    debounce(() => {
      console.log("handleScroll", isLoading);

      if (
        window.innerHeight - buttonRef.current.getBoundingClientRect().top >
        0
      ) {
        if (!isLoading) {
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
    <Button ref={buttonRef} onClick={() => onChange()} disabled={isLoading}>
      {isLoading ? "..." : "Загрузить еще"}
    </Button>
  );
};
