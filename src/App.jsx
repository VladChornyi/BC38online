import { UsersList } from 'components';
import Card from 'components/Card/Card';
import CardList from 'components/CardList/CardList';

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
    { name: 'Poly', id: '1' },
    { name: 'Mango', id: '1' },
  ];
  return (
    <>
      <CardList users={users} />
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
