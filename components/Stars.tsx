import { FC } from "react";
import styled from "styled-components";

const Row = styled.ul`
  display: flex;
`;

const Star = styled.li<{ starsCount: number }>`
  margin-top: 10px;
  width: 17px;
  height: 17px;

  /* border: 3px solid white; */
  background-color: #1f1f1f;
  border-radius: 5px;

  &:not(:first-child) {
    margin-left: 8px;
  }

  &:nth-child(-n + ${({ starsCount }) => starsCount}) {
    background-color: #3eff8b;
    border-color: #3eff8b;
  }
`;

export const Stars: FC<{ rating: number }> = ({ rating }) => {
  const roundedRating = Math.round(rating);

  return (
    <Row>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} starsCount={roundedRating}></Star>
      ))}
    </Row>
  );
};
