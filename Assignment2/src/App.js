import './App.css';
import Invitation from './Invitation/invitation';

function App() {
  return (
    <Invitation
          subject = "Birthday Party Invitation"
          to = "jaGdish@gmail.com"
          name = "Jagdish"
          party = "birthday party"
          friends = {["Ritu", "Saurabh", "Kartik"]}
          location = "Green Field Avenue"
    />

  );
}

export default App;
