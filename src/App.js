import React from 'react';
import Hw1 from './components/Hw1.js';
//import Post from './components/Post.js';
//import Cars from './components/Cars.js';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {

//const list = [{name:'a',info:'aaa'},{name:'b',info:'bbb'},{name:'c',info:'ccc'}];
//const cars = [{company:'honda',model:'civic',price:'20000',discription:'nice car'},{company:'mitsubishi',model:'asx',price:'30000',discription:'nice car'},{company:'suzuki',model:'baleno',price:'25000',discription:'nice car'}]
const hw1 = [{details:'i have a girlfriend',name:'ron',img:<img src={require("./components/milford_sound_t.jpg")}/>}
,{details:'i have a something',name:'gil',img:<img src={require("./components/mountains.jfif")}/>},
{details:'i do not have a girlfriend',name:'yarin',img:<img src={require("./components/flower.jfif")}/>}];  

  return(
    <div className="app">

      {hw1.map((element)=>{
        return <Hw1 details={element.details} name={element.name} img={element.img}/>
      })}

      

    </div>
    );
  
}
export default App;


/*
{motobikes.map((element)=>{
  return <Post company={element.company} type={element.type} price={element.price} info={element.info}/>
  
})}
*/

/*
import React from 'react';
import Header from './components/Header.js';
import Body from './components/Body.js';
import Button from './components/Button.js';
import Post from './components/Post.js';
import Carspost from './components/Carspost.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'


function App() {

  const list = [{name:'a',info:'aaa'},{name:'b',info:'bbb'},{name:'c',info:'ccc'},];
  const carslist = [{company:'citroen',type:'c5',price:'15000$',info:'citroenc5'},
  {company:'nisan',type:'almera',price:'5000$',info:'nisanalmera'},
  {company:'skoda',type:'citygo',price:'20000$',info:'skodacitygo'},
  {company:'skoda',type:'octavia',price:'20000$',info:"kobe.jpg"},];
  const players = [{name:'Kobe Bryant',details:'Bryant was called "one of the greatest players in the history of our game" by NBA commissioner Adam Silver, and The New York Times wrote that he has had "one of the most decorated careers in the history of the sport',
  img:"kobe.jpg"},{}]


  return (
    <div className="App">
      <Header/>
      <Body/>
      {carslist.map((element)=>{
        return <Carspost company={element.company} type={element.type} price={element.price} info={element.info}/>
        
      })}
      

    </div>
  );
}

export default App;
*/