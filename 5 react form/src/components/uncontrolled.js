import React, { Component } from 'react';

class Uncontrolled extends Component {

    handlesubmit = (event)=>{
        event.preventDefault();
        const values = {
            name: this.name.value,
            lastname: this.lastname.value
        }
        console.log(values)
    }

    render(){
        return(
            <div className="container">
               <form>
                    <div className="form_element">
                        <label>Enter Name</label>
                        <input 
                            type="text"
                            ref={input=> this.name=input}
                            ></input>
                    </div>
                    <div className="form_element">
                        <label>Enter LastName</label>
                        <input 
                            type="text"
                            ref={input=> this.lastname=input}
                        ></input>
                    </div>
                    <button onClick={this.handlesubmit} >sign in</button>
                </form>
            </div>
        )
    }
}

export default Uncontrolled;