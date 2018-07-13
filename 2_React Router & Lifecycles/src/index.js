import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

//components
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from './components/post_item';
import Life from './components/life';
import Conditional from './components/conditional';

const App = ()=>{
    return(
        <BrowserRouter>
            <div>
                <header>
                   
                        <Link to="/">Home</Link> <br/>
                        <Link to="/posts" >Posts</Link> <br/>
                        <Link to={{
                            pathname: "/profile" 
                        }}  >Profile</Link> <br/>
                        <Link to="/life" >Life</Link> <br/>
                        <Link to='/conditional' >Conditional</Link>
                        
                    
                </header>
            
                <hr/>
                <Switch>
                    <Route exact path="/posts/:id/:userid" component={PostItem} />
                    
                    <Route path="/posts" exact component={Posts} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/life" component={Life} ></Route>
                    <Route exact path="/" component={Home} /> 
                    <Route path='/conditional' component={Conditional} ></Route>
                </Switch>
            </div>
            
        </BrowserRouter>
    )
} 

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)