// src/components/UserDataDisplay.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const UserDataDisplay = () => {
  const userData = useSelector((state) => state.user.userData);

  return (
    <div>
      <h2>Données utilisateur</h2>
      {userData ? (
        <pre>{JSON.stringify(userData, null, 2)}</pre>
      ) : (
        <p>Aucune donnée utilisateur disponible</p>
      )}
    </div>
  );
};

export default UserDataDisplay;
