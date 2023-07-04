import React, { useState } from "react";
import "./Homepage.css";

const Homepage = ({ coords, loadingCurrentLocation }) => {

    const [formValue, setFormValue] = useState('');

    const searchTrails = e => {
        e.preventDefault();
        console.log(formValue);
    }

    const handleChange = e => {
        setFormValue(e.target.value);
    }

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
                {!loadingCurrentLocation && <h1>{coords.lat}</h1>}
                {loadingCurrentLocation && <h1>Getting current location...</h1>}
            </form>
        </div>
    )
}

export default Homepage;