namespace Api {
  interface Game {
    id: number;
    slug: string;
    name: string;
    released: string;
    background_image: string;
    rating: number;
  }

  interface Response<ResultType> {
    results: ResultType;
  }
}
