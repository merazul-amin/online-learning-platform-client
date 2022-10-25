import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import AllCourses from "../components/Pages/AllCourses/AllCourses";
import Blogs from "../components/Pages/Blogs/Blogs";
import Checkout from "../components/Pages/Checkout/Checkout";
import CourseDetails from "../components/Pages/CourseDetails/CourseDetails";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const routes = createBrowserRouter([
    {
        path: '/', element: <Layout></Layout>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
            { path: '/blogs', element: <Blogs></Blogs> },
            {
                path: '/courses',
                loader: () => fetch('http://localhost:5000/courses'),
                element: <AllCourses></AllCourses>
            },
            {
                path: '/courses/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`),
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/checkout/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/checkout/${params.id}`),
                element: <PrivateRoute> <Checkout></Checkout></PrivateRoute>
            }

        ]
    }
])
export default routes;