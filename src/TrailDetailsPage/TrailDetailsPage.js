import React, { useEffect, useState } from "react";
import './TrailDetailsPage.css';
import { useParams } from "react-router-dom";
import { getTrail } from "../api";

const TrailDetailsPage = () => {

    const [trailData, setTrailData] = useState({});
    const [loadingTrailData, setLoadingTrailData] = useState(true);

    const params = useParams();

    const { id } = params;

    const getTrailData = async (id) => {
        const trailData = await getTrail(id);
        setTrailData(trailData);
        setLoadingTrailData(false);
    }

    useEffect(() => {
        getTrailData(id);
    }, []);

    return (
        <h1>Trail Details Page {id}</h1>
    )
}

export default TrailDetailsPage;