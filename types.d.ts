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

  interface Response<ResultType> {
    results: ResultType;
  }
}
