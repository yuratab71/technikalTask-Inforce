import React from 'react';
import { Link } from "react-router-dom";
import "./card.css";

function CardSmall(props) {
    console.log(props.data)
    return (
        <div className="card-wrapper">
            <div>
                <img className="card-image" src={props.data.imageUrl} alt="trade item photo"></img>
            </div>
            <div>
                <div><span>Name: </span>{props.data.name}</div>
                <div><span>Count: </span>{props.data.count}</div>
            </div>
            <div>
                <Link to={`/details/${props.data._id}`} >Details</Link>
            </div>
        </div>
    )
}

export default CardSmall;
