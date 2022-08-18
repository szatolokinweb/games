import { NextPage, GetServerSideProps } from "next";
import { loadGames } from "../api";
import Link from "next/link";
import { Wrapper } from "../components/Wrapper";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      games: await loadGames(),
      initialSearch: query?.searchp || "",
    },
  };
};

const Home: NextPage<{
  games: Api.Game[];
  initialSearch: string;
}> = ({ games, initialSearch }) => {
  const router = useRouter();

  const [search, setSearch] = useState<string>(initialSearch);

  useEffect(() => {
    const routerQuery = { ...router.query };

    if (search.trim()) {
      routerQuery.search = search;
    } else {
      delete routerQuery.search;
    }

    router.push({
      query: routerQuery,
    });
  }, [search]);

  return (
    <Wrapper>
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <ul>
        {games.map(({ slug, name }) => (
          <li key={slug}>
            <Link href={`/game/${slug}`}>
              <a>{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Home;
