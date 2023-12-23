
import React from "react";
import './../styles/App.css';
import {useState} from "react";

const App = () => {

  const [name,setName]=useState('');
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Enter your name:</p>
        <input type="text" onChange={(e)=> setName(e.target.value)}/>
          {name!=="" && <p>Hello {name}!</p>}
    </div>
  )
}

export default App
