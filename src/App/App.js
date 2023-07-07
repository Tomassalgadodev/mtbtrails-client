import React, { useEffect, useState } from 'react';
import './App.css';


import Header from '../Header/Header';
import Homepage from '../Homepage/Homepage';

function App() {

  const [currentLocation, setCurrentLocation] = useState({});
  const [loadingCurrentLocation, setLoadingCurrentLocation] = useState(true);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        setCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        setLoadingCurrentLocation(false);
      });
    } else {
      console.log('geolocation not available');
    }
  }, []);

  return (
    <>
      <Header />
      <Homepage 
        coords={currentLocation}
        loadingCurrentLocation={loadingCurrentLocation}
      />
    </>
  );
}

export default App;
