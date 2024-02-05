import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu";

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
            element: <About />
        },
        {
            path: "/contact",
            element: <Contact />
        },
        {
            path: "/restaurants/:resId",
            element: <RestaurantMenu />
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