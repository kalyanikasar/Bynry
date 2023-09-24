import React, { useState } from 'react';

const ProfileCard = ({ profile, onSummaryClick }) => {
  const { name, photo, address } = profile;

  return (
    <div className="profile-card">
      <table>
        <tr>
          <td><h2>{name}</h2></td>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={() => onSummaryClick(profile)}>Summary</button></td>
        </tr>
      </table>
      
    </div>
  );
};

export default ProfileCard;
