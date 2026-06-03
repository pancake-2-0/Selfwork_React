import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "./views/Homepage.jsx";
import Posts from "./views/Posts.jsx";
import Detail from "./views/Detail.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
