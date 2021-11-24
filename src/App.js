import Sidebar from "components/sidebar/Sidebar";
import Topbar from "components/topbar/Topbar";
import "./app.css";
import Home from "pages/home/Home";
import Store from "pages/store/Store";
import Products from "pages/products/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
