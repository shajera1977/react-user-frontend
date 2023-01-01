import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Protected() {

    const navigate = useNavigate()

    let email = sessionStorage.getItem('email');
    let password = sessionStorage.getItem('password');

    useEffect (() => { 
        
        if(email === null || password === null)
        {
            navigate("/Login");            
        }
    }) 

    return (
        <div>
            <div className='result'></div>
        </div>
    );
}

export default Protected;