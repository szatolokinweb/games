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

  return (
    <Wrapper>
      <Search value={search} onChange={setSearch} />
      <Select
        items={parentPlatforms}
        value={parentPlatform}
        onChange={setParentPlatform}
      />
      <Sort value={ordering} onChange={setOrdering} />
    </Wrapper>
  );
};

export default Home;
