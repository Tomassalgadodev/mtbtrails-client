import React from "react";
import './TrailDetailsPage.css';
import { useParams } from "react-router-dom";

const TrailDetailsPage = () => {

    const params = useParams();

    const { id } = params;

    return (
        <h1>Trail Details Page {id}</h1>
    )
}

export default TrailDetailsPage;