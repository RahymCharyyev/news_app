import { Route, Router, Routes } from "react-router";
import TheFooter from "./components/TheFooter";
import TheHeader from "./components/TheHeader";
import Main from "./pages/home/Main";
import Favorites from "./pages/favorites/Favorites";

function App() {
  return (
    <>
      <TheHeader />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favorites" element={<Favorites />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/blog" element={<Blog />} /> */}
      </Routes>
      <TheFooter />
    </>
  );
}

export default App;
