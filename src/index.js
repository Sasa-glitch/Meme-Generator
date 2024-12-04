import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import App from './App';
// import Form from './components/Form';




const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Form /> */}

  </React.StrictMode>
);

