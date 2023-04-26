import { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState("");
  const [heading, setHeading] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    setHeading(name);
    setName("")
  }

  return (
    <div className="App">
        <h1>
          Hello, my name is  {heading ? heading : "****"}
        </h1>
        <form onSubmit={handleSubmit}>
          <label>
            Enter Your Name :
            <input type='text' value={name} onChange={handleNameChange}/>
          </label>
          <button type='submit'>Submit</button>
        </form>  
    </div>
  );
}

export default App;
