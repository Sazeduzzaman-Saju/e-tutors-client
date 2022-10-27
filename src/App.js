import { RouterProvider } from 'react-router-dom';
import AuthProvider from './context/AuthProvider/AuthProvider';
import { routes } from './Routes/Routes';



function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={routes}>
        </RouterProvider>
      </AuthProvider>
    </>
  );
}

export default App;
