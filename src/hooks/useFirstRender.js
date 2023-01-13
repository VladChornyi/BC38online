import { useRef } from 'react';

export const useFirstRender = () => {
  const isFirstRender = useRef(true);
  const changeFirst = () => {
    isFirstRender.current = false;
  };
  return [isFirstRender.current, changeFirst];
};
