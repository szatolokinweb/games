import styled, { keyframes } from "styled-components";
import Link from "next/link";

const Row = styled.header`
  position: sticky;
  z-index: 3;
  top: 0;

  padding: 0 20px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: black;
  border-radius: 0 0 20px 20px;
  color: white;
`;

const Col = styled.div`
  &:last-child {
    margin-left: 20px;
    display: flex;
  }
`;

const tiltKeyframes = keyframes`
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(-2deg);
  }

  50% {
    transform: rotate(0deg);
  }

  75% {
    transform: rotate(2deg);
  }

  100% {
    transform: rotate(0deg);
  }
`;

const Logo = styled.a`
  display: block;

  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  animation-duration: 250ms;
  transition: 250ms;

  &:hover {
    animation-name: ${tiltKeyframes};
    color: #3eff8b;
  }
`;

const Item = styled.div`
  &:not(:first-child) {
    margin-left: 20px;
  }
`;

const NavLink = styled.a`
  cursor: pointer;
  transition: 250ms;
  font-size: 18px;

  &:hover {
    color: #3eff8b;
  }
`;

export const Header = () => {
  return (
    <Row>
      <Col>
        <Link href="/">
          <Logo>GAMES</Logo>
        </Link>
      </Col>
      <Col>
        <Item>
          <Link href="/">
            <NavLink>Main</NavLink>
          </Link>
        </Item>
        <Item>
          <Link href="/about">
            <NavLink>About</NavLink>
          </Link>
        </Item>
      </Col>
    </Row>
  );
};
