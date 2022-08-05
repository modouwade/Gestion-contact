import "antd/dist/antd.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/about/About";
import Add from "./pages/add/Add";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact/:id" element={<About />} />
        <Route path="add" element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;
