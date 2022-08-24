import styled from "styled-components";

const Row = styled.ul`
  display: flex;
`;

const Star = styled.li`
  margin-top: 10px;
  width: 17px;
  height: 17px;

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

export const Stars = ({ rating }) => (
  <Row>
    {[1, 2, 3, 4, 5].map((star) => (
      <Star key={star} starsCount={Math.round(rating)}></Star>
    ))}
  </Row>
);
