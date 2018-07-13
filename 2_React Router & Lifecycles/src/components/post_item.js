import React from 'react';


const PostItem = (props)=>{
    console.log(props)
    return(
        <div>
            
            {props.match.params.id}- {props.match.params.userid}
        </div>
    )
} 

export default PostItem;