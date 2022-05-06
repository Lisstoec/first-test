import React, { useState } from 'react'

import Header from "./components/Navbar";
import Footer from "./components/Main";
import Login from './components/Login';
import Register from './components/Register';
import { AuthContext } from './context/AuthContext';

export const App = () => {
  const [authToken, setAuthToken] = useState(null);

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken }}>
      <Header />
      <Login />
      <Register />
      <Footer />
    </AuthContext.Provider>
  )
}
