import React from 'react';
import './Hw1.css';

export default function hw1(props){
    return (
        <div className='card'>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-3">{props.details}</div>
                <div className="col-3"><span id="name">{props.name}</span></div>
                <div className="col-3">{props.img}</div>
                <div className="col-1"></div>
            </div>
        </div>
    );
}