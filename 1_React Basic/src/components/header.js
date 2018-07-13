
import React from 'react';/*
const getYear = () =>{
  const newDate= new Date();
  return newDate.getFullYear();
}*/
/*
const Header = ()=>{
  //return React.createElement('h1',{className:'title'},'hello world');
  return (
    <div className="Header">


    </div>
  )
}*/

const Header = (props) => {

    return(
      <header  >
        <div className='logo'>Logo</div>

        <input 
          type="text"
          onChange= {props.keywords}
         />
         
      </header>
      
    );


}


export default Header;
