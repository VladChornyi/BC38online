import { useEffect, useState } from 'react';

export const useLocalStorage = (LocalKey, initialState) => {
  const getLocalData = () => {
    const data = localStorage.getItem(LocalKey);
    if (data) {
      return JSON.parse(data);
    }
    return initialState;
  };
  const [state, setState] = useState(getLocalData);

  useEffect(() => {
    localStorage.setItem(LocalKey, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};
