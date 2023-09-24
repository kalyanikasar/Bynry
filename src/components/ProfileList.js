// ProfileList.js
import React from 'react';
import ProfileCard from './ProfileCard';

function ProfileList({ profiles }) {
  return (
    <div>
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
}

export default ProfileList;
