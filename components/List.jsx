import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { Stars } from "./Stars";

const Wrapper = styled.div`
  margin-top: 20px;
`;

const Preview = styled.a`
  position: relative;
  z-index: 0;

  padding: 10px;
  padding-bottom: 20px;
  min-height: 200px;
  display: block;

  border: 3px solid black;
  background-color: black;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  transition: 250ms;

  &:hover {
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
    border-color: #3eff8b;
    transform: scale(1.05);
    z-index: 1;

    h3 {
      color: #3eff8b;
    }
  }

  span {
    z-index: -1;
  }

  img {
    object-fit: cover;
    object-position: top;
  }
`;

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  row-gap: 10px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Frame = styled.div`
  position: relative;
  z-index: 0;

  height: 200px;
  overflow: hidden;

  border-radius: 10px;

  @media (max-width: 1024px) {
    height: 250px;
  }

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 414px) {
    height: 200px;
  }
`;

const Title = styled.h3`
  margin: 20px 0 10px;
  transition: 250ms;
`;

const Value = styled.span`
  font-weight: bold;
`;

const Games = ({ games }) => (
  <Grid>
    {games.map(({ slug, name, released, rating, background_image }) => (
      <Link key={slug} href={`game/${slug}`}>
        <Preview>
          {background_image && (
            <Frame>
              <Image src={background_image} layout="fill" priority />
            </Frame>
          )}
          <Title>{name}</Title>
          <div>
            Released: <Value>{released}</Value>
          </div>
          <div>
            Rating: <Value>{rating}</Value>
          </div>
          <Stars rating={rating} />
        </Preview>
      </Link>
    ))}
  </Grid>
);

export const List = ({ games }) => (
  <Wrapper>
    {(games.length && <Games games={games} />) || <h2>No results</h2>}
  </Wrapper>
);
