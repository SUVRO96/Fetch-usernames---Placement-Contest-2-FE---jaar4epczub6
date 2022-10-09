import React from 'react'
import '../styles/App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
const App = () => {
//code here 
  const [data,setData]=useState([]);
  const [input,setInput]=useState("");

  const changeInput=(e)=>{
    setInput(e.target.value);
    console.log(input);
  }

  const callApi=async()=>{
    if(input===""){
      let response= await axios.get('https://content.newtonschool.co/v1/pr/main/users/1');
      setData(response.data);
    }else{
      let response=await axios.get(`https://content.newtonschool.co/v1/pr/main/users/${input}`);
      setData(response.data);
    }
  }
  useEffect(()=>{
    callApi()
  },[input]);


  return (
    <div className="App">
      <h1 id="text">Type a number between 1 and 10</h1>
      <input id="input" onChange={changeInput} />
      <p id="name">{data.name}</p>
    </div>
  );
}


export default App;
