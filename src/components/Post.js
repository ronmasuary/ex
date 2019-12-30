import React from 'react'
import './Post.css';

export default function Post(props){
    return (
        <div className = 'main'>
            <h3>name:{props.name}</h3>
            <h2>info:{props.info}</h2>
        </div>
    )
}


