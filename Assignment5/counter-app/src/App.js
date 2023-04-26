import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  function handleClick1() {n
    if (count > 0){
      setCount(count - 1)
    }
    

  }

  return (
    <div className="App">
      <h4>Count is:</h4>
      <h4>{count}</h4>

      <button onClick={handleClick}>
        Increase
      </button>

      <button onClick={handleClick1} >
        Decrease
      </button>
    </div>
  );
}

export default App;
