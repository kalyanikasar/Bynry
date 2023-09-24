import React, { useState } from 'react';
import ProfileCard from './components/ProfileCard';
import Map from './components/Map';
import SearchFilter from './components/SearchFilter';

const App = () => {
  const [selectedProfile, setSelectedProfile] = useState([]);

  const profiles = [
    {
      id: 1,
      name: "Kalyani Ghule",
      photo: 'a.jpg',
      address: "Dhanori, Pune, India",
      latitude: 18.5835,
      longitude: 73.886488,
    },
    {
        id: 2,
        name: "Abhijeet Ghule",
        photo: 'b.jpg',
        address: "Shivajinagar, pune, India",
        latitude: 18.530823,
        longitude: 73.847466,
      },
      {
        id: 3,
        name: "Atharva Ghule",
        photo: 'c.jpg',
        address: "Hinjewadi, Pune, India",
        latitude: 18.5913,
        longitude: 73.7389,
      },
  ];

  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile);
    console.log('Value of profiles:', profiles);
  };

  return (
    
    <div className="app">
      <h1>Profile Viewer</h1>
      <div className="profile-list">
      <SearchFilter/>
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            profile={profile}
            onSummaryClick={handleSummaryClick}
          />
        ))}
      </div>
      {selectedProfile && (
        <div className="selected-profile">
          <h2>Selected Profile</h2>
          <ProfileCard profile={selectedProfile} />
          <Map selectedProfile={selectedProfile}  />
        </div>
      )}
    </div>
  );
};

export default App;
