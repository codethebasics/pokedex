import Header from "./layout/Header";
import "./App.css";
import Footer from "./layout/Footer";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div id="app">
      <div id="header">
        <Header />
      </div>
      <div id="sidebar">sidebar</div>
      <div id="body">
        <Outlet />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
