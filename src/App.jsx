import { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <div className="container">
        <div className="wrap">
          <Header />
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
