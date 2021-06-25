import logo from './logo.svg';
import './App.css';
//import Basic from './Basic'
//import CompA from './CompA';
//import Forms from './Forms';
import FocusInput from './FocusInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FocusInput/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        

      </header>
    </div>
  );
}

export default App;
