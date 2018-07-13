import React from 'react';

const FormField = (props)=>{

    const renderField = ()=>{
        const formArray =[];
        for(let elementName1 in props.formData){
            formArray.push({
                id:elementName1,
                setting: props.formData[elementName1]
            })
        }

        //console.log(formArray)
        return formArray.map((item,i)=>{
            return (
                <div key={i}>
                    {renderTemplates(item)}
                </div>
            )
        })
    }

    const showLabel = (show,label)=>{
        return show?
        <label> {label} <br/> </label>
        :null;
    }

    const changeHandler = (event,id,blur)=>{
        //console.log(event.target.value)
        const newstate= props.formData;
        newstate[id].value = event.target.value; //keyboard e ja type korsi seta nilam
        
        //validation
        

        //console.log(validData)
        if(blur){ 
            let validData= validate(newstate[id]);
            newstate[id].valid = validData[0];
            newstate[id].validationMessage = validData[1];
        }
        newstate[id].touched= blur;
        
        
        

        props.change(newstate); //called the change fn


    } 

    const validate = (element)=>{
        console.log(element)
        let error = [true,'']

        if(element.validation.minLen){
            const valid= element.value.length >= element.validation.minLen;
            const message= `${ !valid ? 'minimum required ' +element.validation.minLen+' character' :''} `
            error= !valid ? [valid,message]:error;
        }


        if(element.validation.required){
            const valid= element.value.trim() !== '';
            const message= `${ !valid ? 'This field is required':''} `
            error= !valid ? [valid,message]:error;
        }
        return error;
    }

    const showValidation = (data)=>{
        let errorMessage= null;



        if(data.validation && !data.valid){
            errorMessage = (
                <div className="label_error">
                    {data.validationMessage}
                </div>
            )
        }
        return errorMessage;
    }

    const renderTemplates = (data)=>{
        
            let values= data.setting;
            let template = null;

            switch (data.setting.element) {
                case ('input'):
                template=(
                    <div>
                         {showLabel(values.label,values.labelText)}
                         <input {...values.config}
                                value = {values.value}
                                onBlur ={
                                    (event)=> changeHandler(event,data.id,true)
                                }

                                onChange = {
                                    (event)=> changeHandler(event,data.id,false)
                                }
                            />
                        {showValidation(values)}
                    </div>
                )   
                    break;

                case ('textarea'):
                template=(
                    <div>
                       {showLabel(values.label,values.labelText)}
                       <textarea
                            {...values.config}
                            value = {values.value}
                                onChange = {
                                    (event)=> changeHandler(event,data.id)
                                }

                        /> 
                    </div>
                )
                    break;

                case ('select'):
                    template= (
                        <div>
                           {showLabel(values.label,values.labelText)}
                            <select
                                name= {values.config.name}
                                value={values.value}
                                onChange = {
                                    (event)=> changeHandler(event,data.id)
                                }
                            >

                            {values.config.options.map((item,i)=>{
                                return (
                                    <option key={i} value={item.val} > {item.text} </option>
                                )
                            })}
                                 
                            </select>
                         
                        </div>
                    )
                    break;
            
                default:
                    template= null;
                    break;
            }

            return template;
        
    }

    return(
        <div>
            {renderField()}
        </div>
    )
}

export default FormField;