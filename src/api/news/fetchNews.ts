import { AxiosInstance } from "axios";
import { NewsResponse } from "../../types/newsInterfaces";

export const fetchNews = async (
  apiKey: string,
  keyword: string,
  sort: string,
  axiosInstance: AxiosInstance
) => {
  const response = await axiosInstance.get<NewsResponse>(
    `/everything?q=${keyword}&sortBy=${sort}&language=en&apiKey=${apiKey}`
  );
  return response.data.articles;
};
