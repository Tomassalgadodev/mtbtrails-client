import React from "react";
import './TrailCard.css';

import logo from '../assets/header-logo.png';
import star from '../assets/star.png';

const TrailCard = ({ name, difficulty, rating, location, length, thumbnail }) => {

    return (
        <div className="trail-card">
            <div className="thumbnail-wrapper" style={{ backgroundImage: `url(${thumbnail === null ? logo : thumbnail})` }}></div>
            <div className="difficulty-rating-wrapper">
                <span>{difficulty + ' • '}</span>
                <img src={star}/>
                <span>{rating}</span>
            </div>
            <p>{name}</p>
            <p>{location}</p>
            <p>{'Length: ' + length + ' mi'}</p>
        </div>
    )
}

export default TrailCard;