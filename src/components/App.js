
import React from "react";
import './../styles/App.css';
import {usestate} from "react";

const App = () => {

  const [name,setName]=usestate('');
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Enter your name:</p>
        <input type="text" onChange={(e)=> setName(e.target.value)}/>
        <p>Hello {name}!</p>
    </div>
  )
}

export default App
