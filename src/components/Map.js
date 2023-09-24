import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';


function Map({ profiles, selectedProfile }) {
  
  if (!selectedProfile || !selectedProfile.latitude || !selectedProfile.longitude) {
    return <div>Loading...</div>;
  }

  return (
    <MapContainer center={[selectedProfile.latitude, selectedProfile.longitude]} zoom={13}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {profiles.map((profile) => (
        <Marker key={profile.id} position={[profile.latitude, profile.longitude]}>
          <Popup>{profile.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
    // <div>
    //   <h2>Profile Map</h2>
    //   <MapContainer center={[0, 0]} zoom={2} style={{ height: "400px" }}>
    //     <TileLayer
    //       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //     />
    //     {profiles.map((profile) => (
    //       <Marker
    //         key={profile.id}
    //         position={[profile.latitude, profile.longitude]}
    //       >
    //         {/* Add popup here with profile information */}
    //       </Marker>
    //     ))}
    //   </MapContainer>
    // </div>
  );
}

export default Map;
