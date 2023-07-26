import axios from "axios";
import { NewsArticle, NewsResponse } from "../../types/newsInterfaces";

export const searchNews = async (
  apiKey: string,
  keyword: string
): Promise<NewsArticle[]> => {
  try {
    const response = await axios.get<NewsResponse>(
      `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}`
    );
    return response.data.articles;
  } catch (error) {
    throw new Error("Failed to fetch news data.");
  }
};
