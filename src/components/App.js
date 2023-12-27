
import React from "react";
import './../styles/App.css';
import {useState} from "react";

const App = () => {
  const [name, setName] = useState('');
  const handleNameChange = (event) => {
    setNmae(event.target.value);
  };
    <div>
      <label htmlFor="inputName">Enter your name:</label>
      <br />
      <input
        type="text"
        id="inputName"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <p>{name ? `Hello ${name}!` : ""}</p>
    </div>
  );
}

export default App
