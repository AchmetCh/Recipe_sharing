import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';

const root = document.getElementById('root');
const rootElement = createRoot(root)

rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();


// import React from "react";
// import ReactDOM from "react-dom/client";

// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
