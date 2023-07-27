import { useQuery } from "@tanstack/react-query";
import { NewsArticle } from "../types/newsInterfaces";
import { fetchNews } from "../api/news/fetchNews";
import { AxiosInstance } from "axios";

export const useNews = (
  apiKey: string,
  keyword: string,
  axiosInstance: AxiosInstance
) => {
  return useQuery<NewsArticle[], Error>(
    ["news", apiKey, keyword, axiosInstance],
    () => fetchNews(apiKey, keyword, axiosInstance)
  );
};
