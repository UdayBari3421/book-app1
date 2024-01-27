import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import ShowData from "./Components/ShowData";
import RenderSelected from "./Components/RenderSelected";

const App = () => {
  const [apiData, setApiData] = useState([]);
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState("");

  return (
    <div className="container">
      <Navbar
        setValue={setValue}
        setSelected={setSelected}
        value={value}
        setApiData={setApiData}
      />
      <RenderSelected selected={selected} />
      <ShowData
        apiData={apiData}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};

export default App;
