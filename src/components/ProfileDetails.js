// ProfileDetails.js
import React from 'react';

function ProfileDetails({ profile }) {
  return (
    <div>
      <h2>{profile.name}</h2>
      <p>{profile.photo}</p>
      <p>{profile.address}</p>
      <p>{profile.latitude}</p>
      <p>{profile.longitude}</p>
      
    </div>
  );
}

export default ProfileDetails;
