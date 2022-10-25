import { createBrowserRouter } from "react-router-dom";
import LayoutProvider from "../Layout/LayoutProvider";
import Blog from "../Page/Blog/Blog";
import Courses from "../Page/Courses/Courses";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import FaqPage from "../Page/FAQ/FaqPage";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login/Login";
import Register from "../Page/Login/Registration/Register";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <LayoutProvider />,
        children: [
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/courses',
                element: <Courses />,
            },
            {
                path: '/faq',
                element: <FaqPage />,
            },
            {
                path: '/blog',
                element: <Blog />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '*',
                element: <ErrorPage />,
            }
        ]
    }

]);