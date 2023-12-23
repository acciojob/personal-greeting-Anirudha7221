
import React from "react";
import './../styles/App.css';
import {useState} from "react";

const App = () => {

  const [name,setName]=useState('');
  return (
    <div>
        {/* Do not remove the main div */}
        <div>Enter your name:</div>
        <input type="text" onChange={(e)=> setName(e.target.value)}/>
        <div>Hello {name}!</div>
    </div>
  )
}

export default App
