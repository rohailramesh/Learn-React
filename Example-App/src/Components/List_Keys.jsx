import React from "react";

const List_Keys = () => {
  const users = [
    {
      id: 0, // Used in JSX as a key
      name: "Creola Katherine Johnson",
    },
    {
      id: 1, // Used in JSX as a key
      name: "Mario José Molina-Pasquel Henríquez",
    },
    {
      id: 2, // Used in JSX as a key
      name: "Mohammad Abdus Salam",
    },
  ];

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  );
};

export default List_Keys;
