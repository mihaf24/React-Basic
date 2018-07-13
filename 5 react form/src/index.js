import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import {firebase} from  './components/firebase';
const App = (props) =>{
    return(
        <BrowserRouter>
            <Routes {...props} />
        </BrowserRouter>
    )
}



firebase.auth().onAuthStateChanged((user)=>{
    ReactDOM.render(<App auth={user} />, document.getElementById('root'));
})

/*
//checking if the user is logged in or not
firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        console.log('logged in')
    }else{
        console.log('logged out')
    }
})
*/
