import React from "react";
import './TrailCard.css';

import logo from '../assets/header-logo.png';

const TrailCard = ({ name, difficulty, rating, location, length, thumbnail }) => {

    return (
        <div className="trail-card">
            <div className="thumbnail-wrapper" style={{ backgroundImage: `url(${thumbnail === null ? logo : thumbnail})` }}></div>
            <p>{difficulty + ' • ' + rating}</p>
            <p>{name}</p>
            <p>{location}</p>
            <p>{'Length: ' + length + ' mi'}</p>
        </div>
    )
}

export default TrailCard;