import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import SearchBar from './SearchBar/SearchBar';
import LocationDetailsPage from './LocationDetailsPage/LocationDetailsPage';
import TrailDetailsPage from './TrailDetailsPage/TrailDetailsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/location/:lat/:lng/:name',
    element: <LocationDetailsPage />
  },
  {
    path: '/trail/:id',
    element: <TrailDetailsPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
