import React, { useState } from 'react';
import './App.css';

function App() {
const [temparature, setTemaprature] = useState(0);

  return (
    <>
   
      <div className='container'>
      <h1 className='temp'>Temparature Setting App</h1>
        <div className='card'>
          <div className='card-body'>
            <h1 className={temparature > 0 ? "bg-danger" : "bg-success"} style={{color:"white"}}>{temparature} ° C</h1>
            <div className='buttons'>
            <button className=' main-btn' onClick={()=> setTemaprature(temparature +1)}>increment +</button>
            <button className=' main-btn' onClick={()=> setTemaprature(temparature -1)}>decrement -</button>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
