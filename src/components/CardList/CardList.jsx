import Card from 'components/Card/Card';
import React from 'react';
import { nanoid } from 'nanoid';
import images from '../../assets/images.json';
import Title from 'components/Title/Title';
import { List } from './CardList.styled';

export default function CardList({ usersProps }) {
  const func = string => {
    console.log(string);
  };

  return (
    <>
      <Title title="users list" />
      {/* <ul style={{ backgroundImage: `url(${images[0]})`, padding: '20px' }}>
        {usersProps.map(user => (
          <Card key={user.id} href="/Bye" toDo={func} text={user.name} />
          // <li key={user.id}>
          //   <Card  href="/Bye" toDo={func} text={user.name} />
          // </li>
        ))}
      </ul> */}
      <List>
        {usersProps.map(user => (
          <Card key={user.id} href="/Bye" toDo={func} text={user.name} />
          // <li key={user.id}>
          //   <Card  href="/Bye" toDo={func} text={user.name} />
          // </li>
        ))}
      </List>
    </>
  );
}
