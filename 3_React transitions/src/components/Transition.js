import React, { Component } from 'react';
import '../css/App.css';
import Transition from 'react-transition-group/Transition';


class TransitionComp extends Component{

    state ={
        show: true
    }

    showed = ()=>{
        this.setState({
            show: !this.state.show ? true:false 
        })
    }

    render(){
        return(
            <div>
                <Transition
                    in ={this.state.show}
                    timeout = {{
                        enter:2000,
                        exit:2000
                    }}  

                    onEnter={
                        console.log('entered')
                    }
                    onExit= {
                        console.log('exit')
                    }
                >
                { state => 
                    <div className = {`square square-${state}`}  >
                        {`square square-${state}`}
                    </div>
                }
                    
                </Transition>
                
                
                <div className="showDiv"  onClick={this.showed} >
                    show
                </div>
            </div>

        )
    }
}


export default TransitionComp;

/** this is one way to show or hide. but without transition
 * {this.state.show? 
                    <div style={{
                        background: 'red',
                        height: '100px'
                    }} >
                    </div> :null
                }
 */

 /**here we used transition. we used inline styling for transition
            <Transition 
                    in={this.state.show} //this is usually the state
                    timeout ={2000}
                    mountOnEnter //this is done so that the div is not occupied when removed
                    unmountOnExit 
                >
                    { state1 =>
                        <div style={{
                            background:'red',
                            height: '100px',
                            transition : 'all 2s ease',
                            opacity: state1 === 'exiting' || state1=== 'exited'? 0 : 1
                        }} >
                            <p> {state1} </p>
                        </div>

                    }
                </Transition>
                
  */

