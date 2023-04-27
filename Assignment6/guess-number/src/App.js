import './App.css';
import Form from './Components/organism/Form/form';

function App() {
  const luckyNumber = 7;
  
  return (
    <div className="App">
      <h1>Guess the Lucky Number</h1>
     <Form luckyNumber = {luckyNumber}/>
    </div>
  );
}

export default App;
