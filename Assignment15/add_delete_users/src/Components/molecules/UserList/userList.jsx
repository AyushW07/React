import React, { useState } from "react";

function UserList() {
  const [names, setNames] = useState([]);
  const [newName, setNewName] = useState("");

  const handleOnChange = (event) => {
    setNewName(event.target.value);
  };

  const handleAddUser = (event) => {
    event.preventDefault();
    if (newName.trim() !== "") {
      setNames((prevNames) => [...prevNames, newName]);
      setNewName("");
    }
  };

  const handleDeleteUser = (index) => {
    setNames((prevNames) => prevNames.filter((_, i) => i !== index));
  };

  return (
    <div>
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          value={newName}
          onChange={handleOnChange}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleAddUser(event);
            }
          }}
          placeholder="Enter your name"
          style={{marginTop : "10px"}}
        />
      </form>
      <ul style={{ listStyle: "none" }}>
        {names.map((name, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {name}
            <button
              onClick={() => handleDeleteUser(index)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
