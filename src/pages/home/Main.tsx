import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import News from "../../components/News";

const Main = () => {
  return (
    <Layout>
      <Content style={{ margin: "24px 16px" }}>
        <News />
      </Content>
    </Layout>
  );
};

export default Main;
