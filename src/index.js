import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// bootstrap css link
import 'bootstrap/dist/css/bootstrap.min.css';
// toast css link
import 'react-toastify/dist/ReactToastify.css';
import UserContext from './contexts/UserContext/UserContext';
import ThemeContextComponent from './contexts/ThemeContextComponent/ThemeContextComponent';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextComponent>
      <UserContext>
        <App />
      </UserContext>
    </ThemeContextComponent>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
