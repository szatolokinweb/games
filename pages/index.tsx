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
    {games.map(({ slug, name }) => (
      <li key={slug}>
        <Link href={`/game/${slug}`}>
          <a>{name}</a>
        </Link>
      </li>
    ))}
  </ul>
);

export default Home;
