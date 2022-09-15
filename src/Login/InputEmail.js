import './InputEmail.css'
import React, { useState } from 'react'


function InputEmail({handleOnChange, value}) {

    function onChange(ev) {
        const { value } = ev.target;
        console.log(ev.target)
    }

    return (

        <>
        <input  placeholder="Email" id="email" 
        onChange={onChange}
        value={value}
        ></input>
        </>

    );

}
export default InputEmail