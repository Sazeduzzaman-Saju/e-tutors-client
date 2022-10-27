import { createBrowserRouter } from "react-router-dom";
import LayoutProvider from "../layout/LayoutProvider";
import Blog from "../Page/Blog/Blog";
import Courses from "../Page/Courses/Courses";
import FaqPage from "../Page/FaqPage/FaqPage";
import Home from "../Page/Home/Home";
import Register from "../Page/Login/Register";
import Login from '../Page/Login/Login'
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Terms from "../Page/Others/Terms";
import SingleCourseTitle from "../Shared/comps/SingleCourseTitle";
import CheckOutePage from "../Page/CheckOutPage/CheckOutePage";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <LayoutProvider />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/courses',
                element: <Courses />,
                loader: () => fetch(`https://etutor-server.vercel.app/coursetitle`)
            },
            {
                path: '/coursedetails/:id',
                element: <SingleCourseTitle />,
                loader: ({ params }) => fetch(`https://etutor-server.vercel.app/coursedetails/${params.id}`)
            },
            {
                path: '/faq',
                element: <FaqPage />,
            },
            {
                path: '/blog',
                element: <PrivateRoutes><Blog /></PrivateRoutes>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/terms',
                element: <Terms />,
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoutes><CheckOutePage /></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://etutor-server.vercel.app/checkout/${params.id}`)

            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage />,
    }

]);