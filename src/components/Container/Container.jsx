import React from 'react';
import PropTypes from 'prop-types';
import css from './Container.module.css';
import Title from 'components/Title/Title';

export default function Container({ children, title, usersList }) {
  return (
    <div className={css.container}>
      {title && <Title isMain>{title}</Title>}
      {children}
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
