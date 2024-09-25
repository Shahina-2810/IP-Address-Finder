import React, { useEffect, useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { RiUserLocationFill } from 'react-icons/ri';

const API_KEY = 'YOUR API KEY';

const Map = ({ lat, lon }) => {
  // Initial viewport settings
  const [viewport, setViewport] = useState({
    latitude: lat,
    longitude: lon,
    zoom: 14,
    bearing: 0,
    pitch: 0,
    width: '100%',
    height: '100%',
  });

  // Update viewport when lat/lon changes
  useEffect(() => {
    setViewport((prevViewport) => ({
      ...prevViewport,
      latitude: lat,
      longitude: lon,
      transitionDuration: 500, // Smooth transition
    }));
  }, [lat, lon]);

  return (
    <div className="map">
      <ReactMapGL
        mapboxAccessToken={API_KEY} // Updated API prop
        {...viewport}
        onViewportChange={(newViewport) => setViewport(newViewport)}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <Marker latitude={lat} longitude={lon}>
          <div className="mark">
            <RiUserLocationFill size="25px" color="blue" />
          </div>
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default Map;
