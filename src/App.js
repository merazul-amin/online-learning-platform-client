import './App.css';
import { RouterProvider } from "react-router-dom";
import routes from './Routes/Routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <ToastContainer position="top-center"
        autoClose={1000} />
      <RouterProvider router={routes}>
      </RouterProvider>
    </div>
  );
}

export default App;
