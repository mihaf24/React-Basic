import React,{Component} from 'react';

class Life extends Component{
    //1 Get default props

    //2 set default state
    state={
        title:"Lice Cycles"
    }

    //before render
    componentWillMount(){
        console.log('before render');
    }

    //executes before changing the state
    componentWillUpdate(){
        console.log("before update");
    }

    //executes after changing the states
    componentDidUpdate(){
        console.log('after update');
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log(this.state.title) //the previos state
        console.log(nextState.title) //the next state
        //we can compare then decide if we wanna update or not
        
        return true;
    }

    componentWillReceiveProps(){
        console.log('before receive props')
    }

    //this triggers when the component is unmounted
    componentWillUnmount(){
        console.log('unmount')
    }
    //Render
    render(){
        console.log('rendering')
        return(
            <div>
                <div>
                    <h1>{this.state.title} </h1>
                </div>

                <div onClick={
                    ()=>{
                        this.setState({
                            title: "changed title"})
                        }
                    }>
                    change the title
                </div>
            </div>
        )
    } 

    //after render
    componentDidMount(){
        console.log('after render')
    }

    
}

export default Life;