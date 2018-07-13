import React from 'react';
import {css} from 'glamor';


const NewsListItem = (props)=>{
    let news_item= css({
        padding: '20px',
        boxSizing: 'border-box',
        borderBottom: '1px solid grey',
        

    })
    //console.log(props)
    return(
        <div {...news_item} >
            <h3>{props.f.title} </h3>
            <div>{props.f.feed} </div>
        </div>  
    )
}

export default NewsListItem;

/*

*/ 