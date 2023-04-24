import Profile from "./Profile/profile";
import "./App.css";
import { Fragment } from "react";

function App() {
  const users = [
    {
      name: "Rajesh Shrivastav",
      designation: "SDE",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt quod rem culpa, architecto ex perferendis.",
      image: ("https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=400"),
    },
    {
      name: "Akash Singh",
      designation: "Graphic Designer",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt quod rem culpa, architecto ex perferendis.",
      image: ("https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=600"),
    },
    {
      name: "Vikram Singh",
      designation: "UI/UX Developer",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt quod rem culpa, architecto ex perferendis.",
      image: ("https://images.pexels.com/photos/5474037/pexels-photo-5474037.jpeg?auto=compress&cs=tinysrgb&w=400"),
    },
  ];

  const handleSeeMore = (name) => {
    alert (name);
  }

  return (
    <Fragment>
      {users.map((user, index) =>(
        <Profile
            key={index}
            name={user.name}
            designation={user.designation}
            description={user.description}
            image={user.image}
            handleSeeMore={() => handleSeeMore(user.name)}  
        />
         ))}
    </Fragment>
  );
}

export default App;
