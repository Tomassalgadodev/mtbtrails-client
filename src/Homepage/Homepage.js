import React, { useState } from "react";
import "./Homepage.css";

const Homepage = () => {

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
            </form>
        </div>
    )
}

export default Homepage;