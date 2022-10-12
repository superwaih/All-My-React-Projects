import React, { useState } from 'react'
import UnAunthenticatedLayout from '../UnAunthenticatedLayout'
import { Link } from "react-router-dom"
import SuccessMessage from './SuccessMessage'
import VerifyMessage from './VerifyMessage'

const Verification = () => {
    const[successful, setSuccessul] = useState(false)
    if(successful){
        return (
           <SuccessMessage />
           )

    }else{
        return <VerifyMessage setSuccessul={setSuccessul} />
        
    }
}

export default Verification