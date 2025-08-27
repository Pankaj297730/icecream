import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './layouts/app-layout'; // Main app layout or page

import './App.css';
import AboutUs from './pages/Aboutus';
import Contactus from './pages/Contactus';
import ProductPage from './pages/Products';

const router = createBrowserRouter([
  {
    path: '/', // Main path
    element: <AppLayout />, // Main layout or component
  },
  {
    path: '/about-us', // Add the signup route
    element: <AboutUs />, // SignUp page component to render
  },
  {
    path: '/contact-us', // Add the signup route
    element: <Contactus />, // SignUp page component to render
  },
    {
    path: '/products', // Add the signup route
    element: <  ProductPage />, // SignUp page component to render
  },

  
]);

function App() {
  return (
 
      <RouterProvider router={router} />
   
  );
}

export default App;
