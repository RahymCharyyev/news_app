import { Input } from "antd";

const SearchInput = ({ onSearch }: { onSearch: (value: string) => void }) => {
  return (
    <Input.Search
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
