import { UsersList } from 'components';
import Button from 'components/Button/Button';
import Card from 'components/Card/Card';
import CardList from 'components/CardList/CardList';
import Container from 'components/Container/Container';
import Title from 'components/Title/Title';

import { Fragment } from 'react';

let test = true;
const users = ['hello'];
const styleClass = 'link';

export const App = () => {
  // const obj = {
  //   text: 'Hello',
  //   id: '1',
  // };

  // const bool = true;
  // const arr = ['1', '2', '3', '4', '5', '6', '7'];
  // const obj = { item: 'test' }; заборонено
  // const und = undefined;
  // const myNull = null;

  const users = [
    { name: 'Poly', id: '1', test: true },
    { name: 'Mango', id: '2', test: false },
  ];
  return (
    <>
      {/* <Button type="button" isMain >
        Main button
      </Button>
      <Button type="submit">Secondary button</Button> */}
      {/* <Title />
      <Title isMain /> */}
      <Button type="button" color="white">
        Main button
      </Button>
      <Button type="submit" color="black">
        Secondary button
      </Button>
      <Button type="submit" color="tomato">
        Secondary button
      </Button>
      <Container usersList={users} title="Title">
        <CardList usersProps={users} />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo quasi deleniti aliquid distinctio quod
          necessitatibus amet facilis excepturi repellendus fugiat, animi ut a. Minus explicabo officia asperiores
          cumque reiciendis ea!
        </p>
        Просто текст
      </Container>
      {/* <Card text={obj.text} href="/" toDo={func} />
      <Card href="/Bye" toDo={func} /> */}
      {/* {users.length ? (
        <a className={`${styleClass} ${test ? 'first-link' : 'anotherLink'}`} href="">
          first LInk
        </a>
      ) : (
        <a className={`${test ? 'link' : 'anotherLink'}`} href="">
          there is no users
        </a> */}
      {/* )} */}
      {/* {users.length > 0 && <p>{myNull}</p>} */}
      {/* <UsersList /> */}
    </>
  );
};
