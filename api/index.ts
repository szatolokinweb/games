import axios from "axios";
import * as constants from "../constants";

const api = axios.create({
  baseURL: constants.API_BASE_URL,
  params: {
    key: constants.API_KEY,
  },
});

export const loadGames = async ({ query, page }: Api.LoadGamesOptions) => {
  const response = await api.get("games", {
    params: {
      ...query,
      ...(page && { page }),
      page_size: constants.PAGE_SIZE,
    },
  });

  return response.data.results;
};

export const loadGameDetail = async (slug: string) =>
  await (
    await api.get<Api.GameDetail>(`games/${slug}`)
  ).data;

export const loadGameScreenshots = async (slug: string) =>
  (
    await api.get<Api.Response<Api.GameScreenshot[]>>(
      `games/${slug}/screenshots`
    )
  ).data.results;

export const loadParentPlatforms = async () => {
  const response = await api.get<Api.Response<Api.ParentPlatform[]>>(
    "platforms/lists/parents"
  );

  return response.data.results;
};
