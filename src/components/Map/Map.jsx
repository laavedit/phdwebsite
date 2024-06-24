import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';

const position = [31.939040, 77.111426]; // Example coordinates (Shimla, Himachal Pradesh, India)

const Map = () => {
  return (
    <div className="map">
      <h2 className="map__title">Our Location</h2>
      <MapContainer center={position} zoom={13} className="map__container">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            People for Himalayan Development is located here. Come visit us!
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
