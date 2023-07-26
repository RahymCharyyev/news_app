import React, { useEffect, useState } from "react";
import { Button, List, Space } from "antd";
import {
  HistoryOutlined,
  InfoCircleOutlined,
  LoadingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { formatDate } from "../utils/formatDate";
import { NewsArticle } from "../types/newsInterfaces";
import { fetchNews } from "../api/news/fetchNews";

const News = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newsData = await fetchNews(apiKey);
        setNews(newsData);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, [apiKey]);

  const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <>
      {loading ? (
        <LoadingOutlined style={{ alignItems: "center" }} />
      ) : error ? (
        <p>Failed to fetch news data.</p>
      ) : news.length > 0 ? (
        <>
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              pageSize: 3,
              showSizeChanger: false,
            }}
            dataSource={news}
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
                  <img width={272} alt={item.title} src={item.urlToImage} />
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
