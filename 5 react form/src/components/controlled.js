import React, { Component } from 'react';

class Controlled extends Component {

    state = {
        name: '',
        lastname: ''
        
    }


    handleNameChange= (event)=>{
        this.setState({
            name: event.target.value
        })
    }

    handleLastNameChange=(event)=>{
        this.setState({
            lastname: event.target.value
        })
        console.log(event.target.value)
    }

    onSubmit= (event)=>{
        event.preventDefault();
        console.log(this.state)
    }
    render(){
       
        
        

        return(
            <div className="container">
               <form onSubmit={this.onSubmit} >
                    <div className="form_element">
                        <label>Enter Name</label>
                        <input 
                            type="text"
                            onChange={this.handleNameChange}
                            value={this.state.name}
                            ></input>
                    </div>
                    <div className="form_element">
                        <label>Enter LastName</label>
                        <input 
                            type="text"
                            onChange={this.handleLastNameChange}
                            value={this.state.lastname}
                        ></input>
                    </div>
                    <button>sign in</button>
                </form>
            </div>
        )
    }
}

export default Controlled;