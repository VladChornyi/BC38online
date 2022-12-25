import React from 'react';
import PropTypes from 'prop-types';
import css from './Container.module.css';
import Title from 'components/Title/Title';
import { clsx } from 'clsx';

export const test = 'Hello World!';

export default function Container({ children, title, usersList, outlined }) {
  const classes = {
    [css.container]: true,
    [css.outlined]: outlined || title,
    // [css.container]:true,
    // [css.outlined]: outlined
  };
  title.map();

  // let a = 'test';
  // a = 'test1';
  // const arr = ['Hello', 'World'];
  // const obj = { test: 'Hello', test1: 'World' };
  // console.log(obj[a] === obj.test1);

  return (
    <div className={`${css.container} ${outlined ? css.outlined : ''}`}>
      <div className={clsx(css.container, outlined && css.outlined)}>
        <div className={clsx(classes)}>
          {title && <Title isMain>{title}</Title>}
          {children}
        </div>
      </div>
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  usersList: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      test: PropTypes.bool,
    }),
  ),
};
