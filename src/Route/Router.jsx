import { createBrowserRouter } from "react-router";
import HomeLayout from "../Pages/HomeLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
    },
]);

export default router