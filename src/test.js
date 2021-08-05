
/*
import "./App.css"
import React, { useState } from 'react';

function App() {
  const [text,setText] = useState("")
  const [className,setClassName] = useState("")
  const [active,setAtive] = useState(false)
  const [count,setCount] = useState(0)
  //const [person,setPerson] = useState([{name: "name1"},{name: "name2"},{name: "name3"}])

  function changeValue(event){
    setText( event.target.value)
    setClassName( "colorRed" )
  }

  function isActive(){
    setClassName( "true" )
  }

  function changeNumber(){
    setCount( count + 1)
  }

  function changeNumber(){
    setCount((prevCount) => {
      return prevCount + 1
    })
    setCount((prevCount) => {
      return prevCount + 3
    })
  }

  return (
    <div className="App">
      <input type="text" className={className} onChange={changeValue}/>
      <h1>{text}</h1>
      <p>{count}</p>
      <button onClick={changeNumber}>Number Click</button>
      {person.map((item) => {
        return <li>{item.name}</li>
      })}
    </div>
  );
}

export default App;
*/
