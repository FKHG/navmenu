import React from 'react'
import "./nav.css"




const Nav=(props) => {
    return(

    <ul className="list">
      {props.menu.map(el=>
        
      <li className="title">{el.title}
      <ul className="dropdown-list">
      {!el.drop ? null :
      el.drop.map(el=> 
        
      <a href="#">{el}</a>
      
      
      )
      }</ul>
      
      
      
      
      
      </li>

        
        )}  
    </ul>
    )
}
export default Nav 




    // <div className="container">
        //    <ul className="first-list">
        //        <li className="lists">Home</li>
        //        <li className="dropdown">Services
        //             <ul className="drop-list">
        //                 <li className="lists">For Entreprners</li>
        //                 <li className="lists">For Students</li>
        //                 <li className="lists">For Hobbiysts</li>
        //             </ul>
        //        </li >
        //        <li className="lists">Contact</li>
        //    </ul>
        // </div>