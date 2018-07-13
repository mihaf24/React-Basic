import React from 'react';
import NewsListItem from './news_list_item';

const NewsList = (props) => {
    //console.log(props)

    
    const items = props.news.map((item)=>{
        return(
            <NewsListItem key={item.id} f={item}/>
               
        
        )
        
    });
    
    return(
        <div>
            {props.children}
            {items}
        </div>
    )
}

export default NewsList;
