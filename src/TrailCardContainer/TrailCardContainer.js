import React from "react";
import './TrailCardContainer.css';

import TrailCard from "../TrailCard/TrailCard";

const TrailCardContainer = ({ trailData, numberToDisplay }) => {

    let trailCards;

    if (trailData) {
        trailCards = trailData.map((trail, idx) => {
            return (
                <TrailCard 
                    key={idx}
                    name={trail.name}
                    difficulty={trail.difficulty}
                    rating={trail.rating}
                    location={trail.city}
                    length={trail.length}
                    thumbnail={trail.thumbnail}
                    id={trail.id}
                />
            )
        }).splice(0, numberToDisplay);
    }

    return (
        <div>
            {trailCards}
        </div>
    )
}

export default TrailCardContainer;