import { NextPage, GetServerSideProps } from "next";
import { loadGames } from "../api";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {
    games: await loadGames(),
  },
});

const Home: NextPage<{ games: Api.Game[] }> = ({ games }) => (
  <ul>
    {games.map(({ id, slug, name }) => (
      <li key={id}>
        <Link href={`/game/${slug}`}>
          <a>{name}</a>
        </Link>
      </li>
    ))}
  </ul>
);

export default Home;
