import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [allStates, setAllStates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://cdn-api.co-vin.in/api/v2/admin/location/states"
        );
        const states = response.data.states;
        setAllStates(states);
      } catch (error) {
        console.error("Error retrieving states:", error);
      }
    };

    fetchData();
  }, []);

  const handleOnChange = (e) => {
    const searchText = e.target.value;
    setSearchText(searchText);

    const filteredResults = allStates.filter((state) =>
      state.state_name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={handleOnChange}
        placeholder="Search..."
      />
      {searchText && (
        <ul style={{ listStyle: "none" }}>
          {searchResults.map((state) => (
            <li key={state.state_id}>{state.state_name} </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
