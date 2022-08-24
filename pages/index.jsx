import debounce from "lodash/debounce";
import { useCallback, useEffect, useState } from "react";
import { loadGames, loadParentPlatforms } from "../api";
import Head from "next/head";

import { List } from "../components/List";
import { Loader } from "../components/Loader";
import { Search } from "../components/Search";
import { Select } from "../components/Select";
import { Sort } from "../components/Sort";
import { LoadMore } from "../components/LoadMore";

export const getStaticProps = async () => ({
  props: {
    parentPlatforms: await loadParentPlatforms(),
  },
});

const Home = ({ parentPlatforms }) => {
  const [search, setSearch] = useState("");
  const [parentPlatform, setParentPlatform] = useState(null);
  const [ordering, setOrdering] = useState(null);
  const [page, setPage] = useState(1);

  const [isLoading, setIsLoading] = useState(false);

  const [games, setGames] = useState([]);

  const fetchGames = useCallback(
    debounce(async (options) => {
      console.log("fetchGames", options);

      let fetchedGames;

      setIsLoading(true);
      try {
        fetchedGames = await loadGames(options);
      } finally {
        setIsLoading(false);
      }

      if (options.page > 1) {
        setGames((games) => [...games, ...fetchedGames]);
      } else {
        setGames(fetchedGames);
      }
    }, 250),
    [setGames]
  );

  useEffect(() => {
    setPage(1);
  }, [search, parentPlatform, ordering]);

  useEffect(() => {
    fetchGames({
      search,
      parentPlatform,
      ordering,
      page,
    });
  }, [search, parentPlatform, ordering, page]);

  return (
    <>
      <Head>
        <title>Games</title>
      </Head>
      <Search search={search} onChange={setSearch} />
      <Select
        items={parentPlatforms}
        value={parentPlatform}
        onChange={setParentPlatform}
      />
      <Sort value={ordering} onChange={setOrdering} />
      <List games={games} />
      <LoadMore
        onChange={() => setPage((prevPage) => prevPage + 1)}
        isLoading={isLoading}
      />
      <Loader isLoading={isLoading} />
    </>
  );
};

export default Home;
