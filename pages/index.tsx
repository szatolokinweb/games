import { NextPage, GetServerSideProps, GetStaticProps } from "next";
import { loadGames, loadParentPlatforms } from "../api";
import Link from "next/link";
import { Wrapper } from "../components/Wrapper";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import queryString from "query-string";
import debounce from "lodash/debounce";

import { Select } from "../components/Select";
import { Search } from "../components/Search";
import { Sort } from "../components/Sort";
import { List } from "../components/List";
import { Loader } from "../components/Loader";

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    parentPlatforms: await loadParentPlatforms(),
  },
});

const Home: NextPage<{ parentPlatforms: Api.ParentPlatform[] }> = ({
  parentPlatforms,
}) => {
  const [search, setSearch] = useState("");
  const [parentPlatform, setParentPlatform] = useState(null);
  const [ordering, setOrdering] = useState(null);
  const [page, setPage] = useState(1);

  const [isLoading, setIsLoading] = useState(false);

  const [games, setGames] = useState<Api.Game[]>([]);

  const fetchGames = useCallback(
    debounce(async (options: Api.LoadGamesOptions) => {
      console.log("fetchGames", options);

      setIsLoading(true);
      const fetchedGames = await loadGames(options);
      setIsLoading(false);

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
    <Wrapper>
      <Search search={search} onChange={setSearch} />
      <Select
        items={parentPlatforms}
        value={parentPlatform}
        onChange={setParentPlatform}
      />
      <Sort value={ordering} onChange={setOrdering} />
      {(isLoading && <Loader />) || <List games={games} />}
    </Wrapper>
  );
};

export default Home;
