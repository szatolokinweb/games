import axios from "axios";
import { API_BASE_URL, API_KEY, PAGE_SIZE } from "../constants";

const api = axios.create({
  baseURL: API_BASE_URL,
  params: {
    key: API_KEY,
  },
});

export const loadGames = async ({ search, parentPlatform, ordering, page }) =>
  (
    await api.get("games", {
      params: {
        ...(search && { search }),
        ...(parentPlatform && { parent_platforms: parentPlatform }),
        ...(ordering && { ordering }),
        page,
        page_size: PAGE_SIZE,
      },
    })
  ).data.results;

export const loadGameDetail = async (slug) =>
  (await api.get(`games/${slug}`)).data;

export const loadGameScreenshots = async (slug) =>
  (await api.get(`games/${slug}/screenshots`)).data.results;

export const loadParentPlatforms = async () =>
  (await api.get("platforms/lists/parents")).data.results;
