import React from "react";
import './TrailCard.css';

const TrailCard = ({ name, difficulty, rating, location, length, thumbnail }) => {
    return (
        <div>
            <img src={thumbnail} />
            <p>{difficulty + ' • ' + rating}</p>
            <p>{name}</p>
            <p>{location}</p>
            <p>{'Length: ' + length + ' mi'}</p>
        </div>
    )
}

export default TrailCard;