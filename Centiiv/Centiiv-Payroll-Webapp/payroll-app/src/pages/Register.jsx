import React, { useState } from 'react'
import UnAunthenticatedLayout from '../components/UnAunthenticatedLayout'
import SignUpForm from '../components/register-components/SignUpForm'
import Verification from '../components/register-components/Verification'

const Register = () => {
    const[verify, setVerify] = useState(false)
    if(verify){
        return(
            <Verification />  
        )
    }else{
        return <SignUpForm setVerify={setVerify} /> 
    }
}

export default Register