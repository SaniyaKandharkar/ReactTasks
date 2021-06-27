//import logo from './logo.svg';
//import './App.css';
//import Basic from './Basic'
//import CompA from './CompA';
//import Forms from './Forms';
//import FocusInput from './FocusInput';

//import "./App.css";
//import { useState } from "react";
//import ComponentB from "./ComponentB";
//import MyContext from "./MyContext";

//export default function App() {
  //const [myState, setMyState] = useState("Hii, I am Saniya");
  //return (
    //<MyContext.Provider value={myState}>
      //<div className="App">
        //<ComponentB />
        //<button onClick={() => setMyState("Not Sania")}>Click Me</button>
      //</div>
    //</MyContext.Provider>
  //);
//}








import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default function NestingExample() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>
      <hr />
      <h2> Inside Home</h2>
    </div>
  );
}

function Topics() {
  return (
    <div>
      <li>
        <Link to="/">Home</Link>
      </li>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`/topics/Topic 1`}>Inside topics 1</Link>
        </li>
        <li>
          <Link to={`/topics/Topic 2`}>Inside topics 2</Link>
        </li>
        <li>
          <Link to={`/topics/Topic 3`}>Inside topics 3</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={"/"}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`/topics/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}





