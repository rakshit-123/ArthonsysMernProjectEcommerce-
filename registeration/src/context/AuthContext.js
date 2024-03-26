// AuthContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // console.log(localStorage.getItem('jwttoken'));
  const checkLogin = localStorage.getItem('jwttoken')? true : false;
  // console.log(checkLogin);
  const [isLoggedIn, setIsLoggedIn] = useState(checkLogin);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
