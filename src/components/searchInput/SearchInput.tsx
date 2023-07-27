import Search from "antd/es/input/Search";

const SearchInput = ({ onSearch }: { onSearch: (value: string) => void }) => {
  return (
    <Search
      placeholder="Search news by theme"
      allowClear
      enterButton="Search"
      onSearch={(value) => onSearch(value)}
      style={{ width: 280 }}
      size="middle"
    />
  );
};

export default SearchInput;
