import { RouterProvider } from 'react-router-dom';
import AuthProvider from './context/AuthProvider/AuthProvider';
import { routes } from './Routes/Routes';
import { Toaster } from 'react-hot-toast';



function App() {
  return (


    <AuthProvider>
      <RouterProvider router={routes}>
      </RouterProvider>
      <Toaster />
    </AuthProvider>


  );
}
export default App;
