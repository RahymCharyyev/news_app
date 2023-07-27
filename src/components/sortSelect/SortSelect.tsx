import { Select, Space } from "antd";

const SortSelect = ({ onChange }: { onChange: (value: string) => void }) => {
  return (
    <Space>
      <p>Sort the news by it's:</p>
      <Select
        defaultValue={"Popularity"}
        style={{ width: 200 }}
        onChange={(value) => onChange(value)}
        options={[
          { value: "relevancy", label: "Relevancy" },
          { value: "popularity", label: "Popularity" },
          { value: "publishedAt", label: "Publication date" },
        ]}
      />
    </Space>
  );
};

export default SortSelect;
