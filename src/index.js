import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles.css";
import reportWebVitals from './reportWebVitals';
import Header from "./components/Navbar";
import Footer from "./components/Main";
import Login from './components/Login';
import Register from './components/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Login />
    <Register />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint.
reportWebVitals();
