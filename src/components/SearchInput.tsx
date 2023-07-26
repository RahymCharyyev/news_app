import Search from "antd/es/input/Search";
import { searchNews } from "../api/searchNews/searchNews";

const SearchInput = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const onSearch = async (value: string) => {
    try {
      const articles = await searchNews(apiKey, value);
      console.log(articles);
    } catch (error) {
      console.error("Failed to fetch news data.");
    }
  };

  return (
    <Search
      placeholder="Search the news"
      allowClear
      onSearch={onSearch}
      style={{ width: 200 }}
      size="middle"
    />
  );
};

export default SearchInput;
