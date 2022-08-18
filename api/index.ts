import axios from "axios";
import * as constants from "../constants";

const api = axios.create({
  baseURL: constants.API_BASE_URL,
  params: {
    key: constants.API_KEY,
  },
});

export const loadGames = async () =>
  (await api.get<Api.Response<Api.Game[]>>("games")).data.results;

export const loadGame = async (slug: string) =>
  await (
    await api.get<Api.GameDetail>(`games/${slug}`)
  ).data;
