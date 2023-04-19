import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Benefits of using React...
        </h1>
        <ol type ="1">
          <li>Component-based Architecture</li>
          <li>Virtual DOM for efficient update</li>
          <li>Rich ecosystem and community</li>
          <li>Cross-platform development</li>
          <li>Strong community support</li>
        </ol>
        <button>
          Get Started..
        </button>
      </header>
    </div>
  );
}

export default App;
