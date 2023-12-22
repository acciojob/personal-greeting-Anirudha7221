
import React from "react";
import './../styles/App.css';
import {useState} from "react";

const App = () => {

  const [name,setName]=useState('');
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Enter your name:</h1>
        <input type="text" onChange={(e)=> setName(e.target.value)}/>
        <h1>Hello {name}!</h1>
    </div>
  )
}

export default App
