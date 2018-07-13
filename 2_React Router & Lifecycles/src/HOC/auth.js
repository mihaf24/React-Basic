import React from 'react';

const Auth = (props)=>{
    const pass= 'pass123';

    if (pass !== 'pass123'){
        return (
            <h3>You are not authorized</h3>
        )
    }
    else{
        return props.children
    }
}

export default Auth; 