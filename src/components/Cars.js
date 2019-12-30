import React from 'react';
import './Cars.css';

export default function cars(props) {
    return (
        <div className='card'>
            <div className="row">
                <div className="col-3">{props.model}</div>
                <div className="col-3">{props.company}</div>
                <div className="col-3">{props.discription}</div>
                <div className="col-3">
                <div><button>buy</button><br/></div>
                {props.price}</div>
            </div>
        </div>
    )
}
