import React from "react";
import { useParams } from 'react-router-dom';
import './LocationDetailsPage.css';

const LocationDetailsPage = () => {

    const params = useParams();

    const { lat, lng, name } = params;

    return (
        <div>{name}</div>
    );
}

export default LocationDetailsPage;