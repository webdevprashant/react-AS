import React , {lazy, Suspense} from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";

// import About from "./components/About";
const About = lazy(() => import('./components/About'));

// import Grocary from "./components/Grocary";
const Grocary = lazy(() => import('./components/Grocary'));

const AppLayout = () => {
    return <div className="app">
                <Header />
                <Outlet />
                {/* <Body /> */}
            </div>
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children:[
        {
            path: "/",
            element: <Body />
        },    
        {
            path: "/about",
            element: <Suspense fallback={<Shimmer />}><About /></Suspense>
        },
        {
            path: "/contact",
            element: <Contact />
        },
        {
            path: "/restaurants/:resId",
            element: <RestaurantMenu />
        },
        {
            path: "/grocary",
            // element: <Suspense fallback={<h1>Grocary Code Loading....</h1>}><Grocary /></Suspense>
            element: <Suspense fallback={<Shimmer />}><Grocary /></Suspense>
        }
        ]
    },
    // {
    //     path: "/about",
    //     element: <About />       // Routing
    // },
    // {
    //     path: "/contact",
    //     element: <Contact />
    // }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);