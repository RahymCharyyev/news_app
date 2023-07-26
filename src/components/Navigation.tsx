import { Space } from "antd";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Space>
        <Link to="/favorites">Search News</Link>
      </Space>
    </>
  );
};

export default Navigation;
