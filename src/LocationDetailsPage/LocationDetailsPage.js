import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getTrails } from '../api';
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import './LocationDetailsPage.css';

import Header from '../Header/Header';
import TrailCardContainer from "../TrailCardContainer/TrailCardContainer";

const LocationDetailsPage = () => {

    const [loadingTrailData, setLoadingTrailData] = useState(true);
    const [trailData, setTrailData] = useState([]);


    const params = useParams();

    const { lat, lng, name } = params;
    const coords = { lat, lng };
    const mapCenter = { lat: Number(lat), lng: Number(lng) }
    
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
            <Header />
            <GoogleMap zoom={10} center={mapCenter} mapContainerStyle={{ maxWidth: '1200px', height: '700px', margin: '0 auto 0 auto', marginTop: '70px' }}>
                <Marker position={mapCenter} title={'THE CROWN'}>
                </Marker>
            </GoogleMap>
            <div>Trails near {name}</div>
            {loadingTrailData && <div>Loading...</div>}
            {!loadingTrailData &&
                <TrailCardContainer 
                    trailData={trailData} 
                    numberToDisplay={50}
                />
            }
        </div>
    );
}

export default LocationDetailsPage;