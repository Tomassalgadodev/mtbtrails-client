import React, { useEffect, useState } from "react";
import './TrailDetailsPage.css';
import { useParams } from "react-router-dom";
import { getTrail } from "../api";
import Header from "../Header/Header";

const TrailDetailsPage = () => {

    const [trailData, setTrailData] = useState({});
    const [loadingTrailData, setLoadingTrailData] = useState(true);

    const params = useParams();

    const { id } = params;

    const getTrailData = async (id) => {
        const trailData = await getTrail(id);
        setTrailData(trailData.data[0]);
        setLoadingTrailData(false);
    }

    useEffect(() => {
        getTrailData(id);
    }, []);

    return (
        <div>
            <Header />
            <img src={trailData.thumbnail} style={{ width: '100%' }} />
            <h1>{trailData.name}</h1>
            <h2>Rating: {trailData.rating}</h2>
            <h2>Difficulty: {trailData.difficulty}</h2>
            <h2>Location: {trailData.city}, {trailData.region}</h2>
            <p>{trailData.description}</p>
        </div>
    )
}

export default TrailDetailsPage;