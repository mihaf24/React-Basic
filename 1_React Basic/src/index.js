
import React,{Component} from 'react';
import ReactDOM from 'react-dom';

//component
import Header from './components/header';
import NewsList from './components/news_list';
import JSON from './db.json';

class App extends Component {
  
  state =  {
    news: JSON,
    filtered: []
  }

  getKeyWord = (event) =>{
    //console.log(event.target.value)
    let keyword= event.target.value;
    let f = this.state.news.filter((item)=>{
        return item.title.indexOf(keyword) > -1
    }); 
    //console.log(filtered);
    this.setState({
      filtered: f
    })


  }

  render(){
    let x;
    if (this.state.filtered.length === 0){
      x=(<NewsList news={this.state.news}/>)
      }
  else{
    x=(<NewsList news={this.state.filtered}/>)
    }

    //console.log(this.state.news)
    return (
      <div className="Hey">
      
        <Header keywords={this.getKeyWord} />
        {x}
        
      </div>
    )
  }

/*if (this.filtered.length===0)
            this.state.news
          else
            this.state.filtered
            
            
            <NewsList news={this.state.filtered.length === 0 ? this.state.news :this.state.filtered}/>
            */

  
  

}

ReactDOM.render(<App/>,
document.getElementById('root'));
