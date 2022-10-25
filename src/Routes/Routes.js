import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import AllCourses from "../components/Pages/AllCourses/AllCourses";
import Blogs from "../components/Pages/Blogs/Blogs";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";

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
            }

        ]
    }
])
export default routes;