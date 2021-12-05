import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

// cleanup function

const UseEffectCleanup = () =>{

const [size,setSize] = useState(window.innerWidth);


const checkSize = () =>{
    setSize(window.innerWidth)
}

useEffect(()=>{
    console.log('useEffect');
    window.addEventListener('resize',checkSize)
    return() =>{
        console.log('cleanup');
        window.removeEventListener('resize',checkSize)
    }
})

return (
    <>
        <h1>window</h1>
        <h2>{size} px</h2>
    </>
)

}


export default UseEffectCleanup;