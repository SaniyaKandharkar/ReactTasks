//import logo from './logo.svg';
//import './App.css';
//import Basic from './Basic'
//import CompA from './CompA';
//import Forms from './Forms';
//import FocusInput from './FocusInput';

import "./App.css";
import { useState } from "react";
import ComponentB from "./ComponentB";
import MyContext from "./MyContext";

export default function App() {
  const [myState, setMyState] = useState("Hii, I am Saniya");
  return (
    <MyContext.Provider value={myState}>
      <div className="App">
        <ComponentB />
        <button onClick={() => setMyState("Not Sania")}>Click Me</button>
      </div>
    </MyContext.Provider>
  );
}





