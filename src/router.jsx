import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
const Home = lazy(() => import("./Pages/Home/Home"));
const Layout = lazy(() => import("./Components/Layout/Layout"));
const Movies = lazy(() => import("./Pages/Movies/Movies"));
const TvShows = lazy(() => import("./Pages/Shows/TvShows"));
const Search = lazy(() => import("./Pages/Search/Search"));
const DetailPage = lazy(() => import("./Pages/DetailPage/DetailPage"));
const Watchlist = lazy(() => import("./Pages/Watchlist/Watchlist"));
import Loader from "./Components/Loader/Loader";
import ProtectRoute from "./Components/ProtectRoute/ProtectRoute";

const routes = createBrowserRouter([
    {
        path: '', element: <Suspense fallback={<Loader />}>
            <Layout />
        </Suspense>,
        children: [
            { path: '/', element: <Home /> },
            { path: '/movies', element: <Movies /> },
            { path: '/shows', element: <TvShows /> },
            { path: '/search', element: <Search /> },
            { path: '/detail/:type/:id', element: <DetailPage /> },
            {
                path: "/watchlist",
                element: <ProtectRoute>
                    <Watchlist />
                </ProtectRoute>
            }
        ]
    },
])
export default routes;