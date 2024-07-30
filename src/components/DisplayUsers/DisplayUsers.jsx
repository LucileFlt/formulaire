import React from 'react';
import { useSelector } from 'react-redux';

const DisplayUsers = () => {
  const users = useSelector((state) => state.user.users);

  return (
    <div>
      <h2>Liste des Utilisateurs</h2>
      {users.length === 0 ? (
        <p>Aucun utilisateur enregistré</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.firstName} {user.lastName} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DisplayUsers;


