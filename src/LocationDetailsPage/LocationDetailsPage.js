import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getTrails } from '../api';
import { GoogleMap, MarkerF, LoadScript } from "@react-google-maps/api";
import './LocationDetailsPage.css';

import Header from '../Header/Header';
import TrailCardContainer from "../TrailCardContainer/TrailCardContainer";

const LocationDetailsPage = () => {

    const [loadingTrailData, setLoadingTrailData] = useState(true);
    const [trailData, setTrailData] = useState([]);
    const [trailMarkers, setTrailMarkers] = useState([]);

    const params = useParams();

    const { lat, lng, name } = params;
    const coords = { lat, lng };
    const mapCenter = { lat: Number(lat), lng: Number(lng) }
    
    const pageLoadHandler = async () => {
        const data = await getTrails(coords, '3');
        console.log(data);
        setTrailData(data);
        setLoadingTrailData(false);
    }
    useEffect(() => {
        pageLoadHandler();
    }, []);

    useEffect(() => {
        if (!loadingTrailData) {
            const trails = trailData.map((trail, idx) => {
                const trailCoords = {
                    lat: Number(trail.lat),
                    lng: Number(trail.lon)
                }
                return (
                    <MarkerF 
                        position={trailCoords} 
                        title={trail.name}
                        label={trail.name}
                        key={idx}
                    ></MarkerF>
                )
            });

            setTrailMarkers(trails);
        }
    }, [ loadingTrailData ]);

    return (
        <div>
            <Header />
            <GoogleMap zoom={12} center={mapCenter} mapContainerStyle={{ maxWidth: '1200px', height: '700px', margin: '0 auto 0 auto', marginTop: '70px' }}>
                {trailMarkers}
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