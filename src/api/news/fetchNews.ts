import { AxiosInstance } from "axios";
import { NewsResponse } from "../../types/newsInterfaces";

export const fetchNews = async (
  apiKey: string,
  keyword: string,
  axiosInstance: AxiosInstance
) => {
  const response = await axiosInstance.get<NewsResponse>(
    `/everything?q=${keyword}&apiKey=${apiKey}`
  );
  return response.data.articles;
};
