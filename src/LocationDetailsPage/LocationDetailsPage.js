import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getTrails } from '../api';
import './LocationDetailsPage.css';

const LocationDetailsPage = () => {

    const [loadingTrailData, setLoadingTrailData] = useState(true);
    const [trailData, setTrailData] = useState([]);


    const params = useParams();

    const { lat, lng, name } = params;
    const coords = { lat, lng };
    
    const pageLoadHandler = async () => {
        const data = await getTrails(coords);
        console.log(data);
        setTrailData(data);
        setLoadingTrailData(false);
    }
    useEffect(() => {
        pageLoadHandler();
    }, []);

    return (
        <div>
            <div>Trails near {name}</div>
            {loadingTrailData && <div>Loading...</div>}
            {!loadingTrailData && trailData.toString()}
        </div>
    );
}

export default LocationDetailsPage;