import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './layouts/app-layout'; // Main app layout or page

import './App.css';
import Aboutus from './pages/Aboutus';

const router = createBrowserRouter([
  {
    path: '/', // Main path
    element: <AppLayout />, // Main layout or component
  },
  {
    path: '/aboutus', // Add the signup route
    element: <Aboutus />, // SignUp page component to render
  },
]);

function App() {
  return (
 
      <RouterProvider router={router} />
   
  );
}

export default App;
