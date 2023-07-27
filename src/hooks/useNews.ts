import { useQuery } from "@tanstack/react-query";
import { fetchNews } from "../api/news/fetchNews";
import axiosInstance from "../api/axiosInstance";

export const useNews = (apiKey: string, keyword: string, sort: string) => {
  return useQuery(
    ["news", apiKey, keyword, sort],
    () => fetchNews(apiKey, keyword, sort, axiosInstance),
    {
      enabled: !!sort,
    }
  );
};
