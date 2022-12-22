import Card from 'components/Card/Card';
import React from 'react';
import nanoid from 'nanoid';

export default function CardList({ users }) {
  const func = string => {
    console.log(string);
  };

  return (
    <ul>
      {users.map(user => (
        <Card key={user.id + user.name} href="/Bye" toDo={func} text={user.name} />
      ))}
    </ul>
  );
}
