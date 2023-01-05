import React, {useState} from 'react';
import './App.css';

function App() {
  let [count, setCount] = useState(0)
  return (
    <>
    <h1>Counter: {count}</h1>
    <button id= 'btn1' onClick={()=>setCount(count+1)}>ADD</button>
    <button id= 'btn1' onClick={()=>setCount(count-1)}>DEC</button>
    <button id= 'btn1' onClick={()=>setCount(0)}>RESET</button>
    </>
  );
}

export default App;
