import Link from "next/link";
import { FC } from "react";

export const List: FC<{ games: Api.Game[] }> = ({ games }) =>
  (games.length && (
    <ul>
      {games.map(({ slug, name, released, rating }) => (
        <Link key={slug} href={`game/${slug}`} style={{ marginTop: "10px" }}>
          <a>
            <h3>{name}</h3>
            <div>released {released}</div>
            <div>rating {rating}</div>
          </a>
        </Link>
      ))}
    </ul>
  )) || <>Список пуст</>;
