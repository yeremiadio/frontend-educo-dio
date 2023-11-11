import Dashboard from "../page/dashboard/Dashboard";
import CodingPage from "../page/coding/CodingPage";
import Archive from "../page/archive/Archive";
import Materi from "../page/materi/Materi";
import Assignment from "../page/assignment/Assignment";
import Profile from "../page/profile";
import Pedoman from "../page/guides/Pedoman";

export const ListRoutes = [
    
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/materi",
        element: <Materi />
    },
    {
        path: "/assignment",
        element: <Assignment />
    },
    {
        path: "/codingpage",
        element: <CodingPage />
    },
    {
        path: "/archive",
        element: <Archive />
    },
    {
        path: "/profile",
        element: <Profile />
    },
    {
        path: "/pedoman",
        element: <Pedoman />
    },
]