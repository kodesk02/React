import React, {useState } from 'react';
import  Calendar  from 'react-calendar';
import './App.css'

function Calendari (){
  const[value, onChange] = useState(new Date());

 
  // style={{background:'linear-gradient(blue, black)'}}
    return(
      <div >
        <h1>Calendar made with react</h1>
        <Calendar value={value} onChange={onChange}/>
      </div>
    )
   
}
export default Calendari;