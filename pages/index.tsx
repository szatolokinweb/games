import { NextPage, GetServerSideProps, GetStaticProps } from "next";
import { loadGames, loadParentPlatforms } from "../api";
import Link from "next/link";
import { Wrapper } from "../components/Wrapper";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import queryString from "query-string";
import debounce from "lodash/debounce";

import { Select } from "../components/Select";
import { Search } from "../components/Search";
import { Sort } from "../components/Sort";
import { List } from "../components/List";

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

  const [games, setGames] = useState<Api.Game[]>([]);

  const fetchGames = debounce(async () => {
    const fetchedGames = await loadGames({
      search,
      parentPlatform,
      ordering,
      page,
    });

    if (page > 1) {
      setGames((games) => [...games, ...fetchedGames]);
    } else {
      setGames(fetchedGames);
    }
  }, 1000);

  useEffect(() => {
    setPage(1);
  }, [search, parentPlatform, ordering]);

  useEffect(() => {
    fetchGames();
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
      <List games={games} />
    </Wrapper>
  );
};

export default Home;
