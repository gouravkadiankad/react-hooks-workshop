import React from 'react'
import {data} from '../data'
import  {Link, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react/cjs/react.development'

function Person() {

    const [name, setName] = useState('default name');
    // console.log();
    const {id}  = useParams();
    
    console.log(id);

    useEffect(()=>{
        const newPerson = data.find((person)=> person.id === parseInt(id))
        setName(newPerson.name)
    },[])

    return (
        <div>
            <h1>{name}</h1>
            <Link to ="/people" className='btn'>Back to people</Link>
        </div>
    )
}

export default Person
