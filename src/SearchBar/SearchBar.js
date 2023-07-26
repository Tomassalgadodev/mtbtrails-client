import React, { useState } from 'react';
import './SearchBar.css';
import { LoadScript } from "@react-google-maps/api";
import searchIcon from '../assets/magnifying-glass-icon.png';
import searchArrow from '../assets/search-arrow.png';

import PlacesAutocomplete from 'react-places-autocomplete';

import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
} from 'react-places-autocomplete';

import { useNavigate } from 'react-router-dom';

const libraries = [ 'places' ];

const SearchBar = () => {

    const [address, setAddress] = useState('');
    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null
    });

    const navigate = useNavigate();

    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const coords = await getLatLng(results[0]);
        console.log(coords);
        navigate('/location/' + coords.lat + '/' + coords.lng + '/' + value);
        setAddress(value);
        setCoordinates(coords);
    }


    return (
        <div>
            {/* <p>Lat: {coordinates.lat}</p>
            <p>Lon: {coordinates.lng}</p>
            <p>Address: {address}</p> */}
            <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div className='search-bar'>
                    <div className="input-wrapper">
                        <img src={searchIcon} className='search-icon'/>
                        <input
                        {...getInputProps({
                            placeholder: 'Search by city, park or trail name',
                            className: 'location-search-input',
                        })}
                        />
                        <img src={searchArrow} className='search-arrow' />
                        <button className='search-button' />
                    </div>
                    <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map((suggestion, idx) => {
                        const className = suggestion.active
                        ? 'suggestion-item--active'
                        : 'suggestion-item';
                        // inline style for demonstration purpose
                        const style = suggestion.active
                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                        return (
                        <div
                            {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                            })}
                            key={idx}
                        >
                            <span className='suggestion-text'>{suggestion.description}</span>
                        </div>
                        );
                    })}
                    </div>
                </div>
                )}
            </PlacesAutocomplete>
        </div>
    )
}

export default SearchBar;