import React, { Component } from 'react';
import FormField from './widget/form/formfield';
import {firebaseDB} from '../components/firebase';
class User extends Component {

    state = {
        formData:{
            name: {
                element: 'input',
                value: '',
                label: true,
                labelText: 'Name',
                config:{
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter Your Name'
                },
                validation:{
                    required: true,
                    minLen: 5
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            lastname: {
                element: 'input',
                value: '',
                label: true,
                labelText: 'Last Name',
                config:{
                    name: 'lastname_input',
                    type: 'text',
                    placeholder: 'Enter Your Last Name'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            message: {
                element: 'textarea',
                value: '',
                label: true,
                labelText: 'Message',
                config: {
                    name: 'message',
                    rows: 4,
                    cols: 18
                },
                validation:{
                    required: false
                }, 
                valid: true
            },
            age:{
                element: 'select',
                value: '',
                label: true,
                labelText: 'Age',
                config: {
                    name: 'age_input',
                    options: [
                        {val:"1", text: '10-20'},
                        {val:"2", text: '20-30'},
                        {val:"3", text: '30+'}
                    ]
                    
                },
                validation:{
                    required: false
                },
                valid: true

            }
        }
    }


    updateForm= (newstate)=>{
        this.setState({
            formData:newstate
        })
    }

    submitForm= (event)=>{
        event.preventDefault();
        let datatosubmit = {};
        let formValid= true;
        for(let item in this.state.formData){
            datatosubmit[item] = this.state.formData[item].value;
        }

        for(let item in this.state.formData){
            formValid = this.state.formData[item].valid && formValid;
        }

        if(formValid){
            //console.log(datatosubmit);
            firebaseDB.ref('user').push(datatosubmit)
            .then(()=>{
                console.log('new user is added')
            }).catch((e)=>{
                console.log(e)
            })
        }
        
        

        //axios.post(url,datatosubmit)....
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.submitForm} >
                    <FormField
                        formData={this.state.formData}
                        blur= {(newstate)=> this.updateForm(newstate)}
                        change= { (newstate)=> this.updateForm(newstate) }
                    />
                    <button type="submit" >Submit</button>
                </form>
            </div>
        )
    }
}

export default User;