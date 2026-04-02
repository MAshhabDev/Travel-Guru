import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import TourDetails from "../Pages/TourDetails";
import PrivateRoute from "./PrivateRoute";
import Loading from "../Components/Loading";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/:id",
                element: <Home></Home>
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "/tour-details/:id",
        element: <PrivateRoute><TourDetails></TourDetails></PrivateRoute>,

        loader: () => fetch("/Travel.json"),
        hydrateFallbackElement:<Loading></Loading>
    }
]);

export default router