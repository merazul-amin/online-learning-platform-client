import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import AllCourses from "../components/Pages/AllCourses/AllCourses";
import Blogs from "../components/Pages/Blogs/Blogs";
import Checkout from "../components/Pages/Checkout/Checkout";
import CourseDetails from "../components/Pages/CourseDetails/CourseDetails";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
            { path: '/blogs', element: <Blogs></Blogs> },
            {
                path: '/courses',
                loader: () => fetch('https://assignment-10-server-theta.vercel.app/courses'),
                element: <AllCourses></AllCourses>
            },
            {
                path: '/courses/:id',
                loader: ({ params }) => fetch(`https://assignment-10-server-theta.vercel.app/courses/${params.id}`),
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/checkout/:id',
                loader: ({ params }) => fetch(`https://assignment-10-server-theta.vercel.app/checkout/${params.id}`),
                element: <PrivateRoute> <Checkout></Checkout></PrivateRoute>
            }

        ]
    }
])
export default routes;