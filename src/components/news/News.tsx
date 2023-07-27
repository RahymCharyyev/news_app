import React, { useState } from "react";
import { Button, List, Space, Image } from "antd";
import {
  HistoryOutlined,
  InfoCircleOutlined,
  LoadingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { formatDate } from "../../utils/formatDate";
import { useNews } from "../../hooks/useNews";
import SearchInput from "../searchInput/SearchInput";
import SortSelect from "../sortSelect/SortSelect";

const News = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [keyword, setKeyword] = useState("keyword");
  const [sort, setSort] = useState("popularity");

  const handleSearch = (value: string) => {
    setKeyword(value);
  };

  const handleSort = (value: string) => {
    setSort(value);
  };

  const { data, isLoading, isError } = useNews(apiKey, keyword, sort);

  if (isLoading) {
    return <LoadingOutlined style={{ fontSize: 48, alignItems: "center" }} />;
  }

  if (isError) {
    return <div>Error occurred while fetching news data.</div>;
  }

  const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <>
      {data && data.length > 0 ? (
        <>
          <Space>
            <SearchInput onSearch={handleSearch} />
            <SortSelect onChange={handleSort} />
          </Space>
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              pageSize: 4,
              showSizeChanger: false,
            }}
            dataSource={data}
            renderItem={(item) => (
              <List.Item
                key={item.title}
                actions={[
                  <IconText
                    icon={InfoCircleOutlined}
                    text={item.source.name}
                    key="list-info-circle-outlined"
                  />,
                  <IconText
                    icon={UserOutlined}
                    text={item.author}
                    key="list-user-outlined"
                  />,
                  <IconText
                    icon={HistoryOutlined}
                    text={formatDate(item.publishedAt)}
                    key="list-history-outlined"
                  />,
                  <Button href={item.url} target="_blank">
                    Read More
                  </Button>,
                ]}
                extra={
                  <Image width={300} src={item.urlToImage} alt={item.title} />
                }
              >
                <List.Item.Meta
                  title={item.title}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </>
      ) : (
        <p>No news available.</p>
      )}
    </>
  );
};

export default News;
