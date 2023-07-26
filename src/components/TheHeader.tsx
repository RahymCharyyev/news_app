import { Header } from "antd/es/layout/layout";
import Navigation from "./Navigation";

const TheHeader = () => {
  return (
    <>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <h1 style={{ color: "white", paddingRight: "20px" }}>News App</h1>
        <Navigation />
        {/* <Search /> */}
      </Header>
    </>
  );
};

export default TheHeader;
