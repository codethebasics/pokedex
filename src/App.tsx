import Header from "./layout/Header";
import "./App.css";
import Footer from "./layout/Footer";

function App({ children }: any) {
  return (
    <div id="app">
      <div id="header">
        <Header />
      </div>
      <div id="sidebar">sidebar</div>
      <div id="body">{children}</div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
