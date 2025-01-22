//The entry of the project. Everything starts here.

//React Necassary Packages
import React from 'react';
import ReactDOM from 'react-dom/client';

//Import project's root components
import App from './App';

//Render App Comopnent into a node of DOM whose ID is root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)

