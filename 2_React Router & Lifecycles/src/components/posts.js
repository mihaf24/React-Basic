import React from 'react';
import {Link} from 'react-router-dom';

const Posts = ()=>{
    return(
        <div>
            <Link to="/posts/1/fahim" >Post 1</Link>
            <Link to="/posts/2/rakib" >Post 2</Link>
            <Link to="/posts/3/fahad" >Post 3</Link>
            
        </div>
    )
} 

export default Posts;