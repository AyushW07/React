import { useState } from 'react';
import './App.css';
import UserCard from './Components/UserCard/userCard';

function App() {

  const [users, setUsers] = useState([]);

  const handleOnClick = async() => {
    const response = await fetch("https://reqres.in/api/users/");
    const data = await response.json();
    setUsers(data.data);
  };

  return (
    <div className="App">
        <button onClick={handleOnClick} className='button'>Get Users</button>
        <div className='card1'>
            {users.map((user) => (
              <UserCard key={user.id} user = {user}/>
            ))}
        </div>
    </div>
  );
}

export default App;
