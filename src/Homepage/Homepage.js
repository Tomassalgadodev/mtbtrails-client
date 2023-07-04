import React, { useEffect, useState } from "react";
import "./Homepage.css";

const Homepage = ({ coords, loadingCurrentLocation }) => {

    const [formValue, setFormValue] = useState('');
    const [loadingTrailData, setLoadingTrailData] = useState(true);
    const [trailData, setTrailData] = useState([]);

    const searchTrails = e => {
        e.preventDefault();
        console.log(formValue);
    }

    const handleChange = e => {
        setFormValue(e.target.value);
    }

    const getTrails = async (coords) => {

        const fetchURL = `https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lat=${coords.lat}&lon=${coords.long}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '23091ce880msh32853f28162dd0bp17dc3fjsn85b6b58e5faa',
                'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(fetchURL, options);
            const data = await response.json();
            setTrailData(data.data);
            setLoadingTrailData(false);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (!loadingCurrentLocation) {
            getTrails(coords);
        } else {
            console.log('loading');
        }
    }, [loadingCurrentLocation]);

    return (
        <div>
            <form
                onSubmit={searchTrails}            
            >
                <input 
                    placeholder="Search by city, park, or trail name"
                    value={formValue}
                    onChange={handleChange} 
                />
                <button>Submit</button>
                {!loadingTrailData && 
                    // Display trail data
                    <h1>{coords.lat}</h1>
                }
                {loadingTrailData && 
                    // Display loading trail data
                    <h1>Getting current location...</h1>
                }
            </form>
        </div>
    )
}

export default Homepage;