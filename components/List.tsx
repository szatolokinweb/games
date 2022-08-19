import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import styled from "styled-components";

const Preview = styled.a`
  position: relative;
  z-index: 0;

  margin-top: 20px;
  padding: 10px;
  min-height: 200px;
  display: block;

  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  }

  span {
    z-index: -1;
  }

  img {
    object-fit: cover;
  }
`;

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  row-gap: 10px;
`;

export const List: FC<{ games: Api.Game[] }> = ({ games }) =>
  (games.length && (
    <Grid>
      {games.map(({ slug, name, released, rating, background_image }) => (
        <Link key={slug} href={`game/${slug}`} style={{ marginTop: "10px" }}>
          <Preview>
            <h3>{name}</h3>
            <div>released {released}</div>
            <div>rating {rating}</div>
            {background_image && (
              <Image src={background_image} layout="fill" priority />
            )}
          </Preview>
        </Link>
      ))}
    </Grid>
  )) || <>Не найдено</>;
