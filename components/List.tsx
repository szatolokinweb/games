import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";

const Preview = styled.a<{ image: string }>`
  margin-top: 20px;
  padding: 10px;
  min-height: 200px;
  display: block;

  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  background-image: url(${(props) => props.image});
  background-size: cover;
  transition: 0.5s;

  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  }
`;

export const List: FC<{ games: Api.Game[] }> = ({ games }) =>
  (games.length && (
    <ul>
      {games.map(({ slug, name, released, rating, background_image }) => (
        <Link key={slug} href={`game/${slug}`} style={{ marginTop: "10px" }}>
          <Preview image={background_image}>
            <h3>{name}</h3>
            <div>released {released}</div>
            <div>rating {rating}</div>
          </Preview>
        </Link>
      ))}
    </ul>
  )) || <>Не найдено</>;
