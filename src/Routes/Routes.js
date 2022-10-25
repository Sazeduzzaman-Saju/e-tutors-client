import { createBrowserRouter } from "react-router-dom";
import LayoutProvider from "../layout/LayoutProvider";
import Blog from "../Page/Blog/Blog";
import Courses from "../Page/Courses/Courses";
import FaqPage from "../Page/FaqPage/FaqPage";
import Home from "../Page/Home/Home";
import Register from "../Page/Login/Register";
import Login from '../Page/Login/Login'
import ErrorPage from "../Page/ErrorPage/ErrorPage";


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
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register />,
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage />,
    }

]);