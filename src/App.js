import React from 'react';
import Nav from './components/nav';
import './App.css';


const menu=[
  {title:"home"},
  {title:"services", drop:["For Entrepreners","For Students","For habbyists"]},
  {title:"contact"},
]



function App() {
  return (
    <div className="App">
      <Nav menu={menu} />
     
    </div>
  );
}

export default App;
