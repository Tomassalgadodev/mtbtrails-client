import React, { useEffect, useState } from "react";
import { getTrails } from "../api";
import "./Homepage.css";

import TrailCardContainer from "../TrailCardContainer/TrailCardContainer";
import SearchBar from "../SearchBar/SearchBar";

const Homepage = ({ coords, loadingCurrentLocation }) => {

    const [loadingTrailData, setLoadingTrailData] = useState(true);
    const [trailData, setTrailData] = useState([]);

    const pageLoadHandler = async () => {
        const data = await getTrails(coords);
        setTrailData(data);
        setLoadingTrailData(false);
    }

    useEffect(() => {
        if (!loadingCurrentLocation) {
            pageLoadHandler();
        }
    }, [loadingCurrentLocation]);

    return (
        <div>
            <div className="search-bar-backdrop">
                <SearchBar />
            </div>
            {!loadingTrailData && 
                // Display trail data
                <h1>{coords.lat}</h1>
            }
            {loadingTrailData && 
                // Display loading trail data
                <h1>Getting current location...</h1>
            }
            <h1>Local favorites near you</h1>
            <TrailCardContainer 
                trailData={trailData}
                numberToDisplay={4}
            />
        </div>
    )
}

export default Homepage;