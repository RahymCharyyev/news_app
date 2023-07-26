import { Space } from "antd";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Space>
        <Link to="/">Home</Link>
        <div style={{ color: "white" }}> | </div>
        <Link to="/top-news">Top News</Link>
        <div style={{ color: "white" }}> | </div>
        <Link to="/sources">Sources</Link>
      </Space>
    </>
  );
};

export default Navigation;
