import { useState } from 'react';
import './App.css'
function App() {

  let [count,setCount]=useState(0);

  // let counter =0;
  // function addValues(){
  //   counter = counter+1;
  //   console.log(counter)
  // }

  const addValues =()=>{
    
      count= count+1;
      setCount(count)
      console.log(count)
 
    
  }



  

  return <>
    <h1>couter</h1>

    <h2>{count}</h2>

    <button onClick={addValues}> + increment Values</button>
    <br />
    <br />
    <button onClick={ ()=>{setCount(count-1)}}> - decrement Values</button>
  </>;
}

export default App;



// 