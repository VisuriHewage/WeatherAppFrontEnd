import React from 'react';
import Mapbox from './MapBox';

function Map() {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
    <h1 style={{ marginBottom: '40px', textAlign: 'center', color: '#007bff' }}>Weather Updates - Sri Lanka</h1>
    <div style={{ textAlign: 'left', marginLeft: '20px' }}>
      <p>Take cursor to the map to get details.</p>
    </div>
    <Mapbox />
  </div>
  );
}

export default Map;