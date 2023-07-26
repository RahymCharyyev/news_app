import { Route, Routes } from "react-router";
import TheFooter from "./components/footer/TheFooter";
import TheHeader from "./components/header/TheHeader";
import Home from "./pages/home/Home";
import TopNews from "./pages/topNews/TopNews";
import Sources from "./pages/sources/Sources";

function App() {
  return (
    <>
      <TheHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-news" element={<TopNews />} />
        <Route path="/sources" element={<Sources />} />
      </Routes>
      <TheFooter />
    </>
  );
}

export default App;
