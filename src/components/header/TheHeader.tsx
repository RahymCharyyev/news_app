import { Header } from "antd/es/layout/layout";
import Logo from "../../assets/logo.png";
import Navigation from "../navigation/Navigation";

const TheHeader = () => {
  return (
    <>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <img
          src={Logo}
          alt="App logo"
          width={80}
          style={{ paddingRight: "5px" }}
        />
        <h1 style={{ color: "white", paddingRight: "20px" }}>News App</h1>

        <Navigation />
      </Header>
    </>
  );
};

export default TheHeader;
