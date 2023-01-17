import { login as hi } from 'helpers/login';
import { useState } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const logIn = password => {
    if (password === 'admin') {
      setIsAuth(true);
      hi();
    } else {
      alert('Please enter your password');
    }
  };
  const logOut = () => {
    setIsAuth(false);
  };
  return <AuthContext.Provider value={{ isAuth, logIn, logOut }}>{children}</AuthContext.Provider>;
};
