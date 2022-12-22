import React from 'react';
import css from './Title.module.scss';

export default function Title({ isMain, title = 'This is title' }) {
  return (
    <div className={css.wrapper}>
      <h2 className={isMain ? css.mainTitle : css.subTitle}>{title}</h2>
    </div>
  );
}
