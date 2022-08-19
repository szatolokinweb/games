namespace Api {
  interface Game {
    slug: string;
    name: string;
    released: string;
    background_image: string;
    rating: number;
  }

  interface GameDetail extends Game {
    description: string;
    website: string;
  }

  interface GameScreenshot {
    id: number;
    image: string;
  }

  interface Response<ResultType> {
    results: ResultType;
  }

  interface LoadGamesOptions {
    query: ParsedUrlQuery;
    page?: number;
  }

  interface ParentPlatform {
    id: number;
    name: string;
  }
}

namespace Select {
  interface Item {
    id: number;
    name: string;
  }

  interface ItemProps {
    selected: boolean;
  }

  type Value = number | null;

  interface ListProps {
    show: boolean;
  }
}

namespace Sort {
  type Value = {
    value: string | null;
    name: string;
  };
}
