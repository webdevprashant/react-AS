import React , {lazy, Suspense, useContext, useEffect, useState} from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";

// import About from "./components/About";
const About = lazy(() => import('./components/About'));

// import Grocary from "./components/Grocary";
const Grocary = lazy(() => import('./components/Grocary'));

const AppLayout = () => {
    // const {loggedInUser} = useContext(UserContext);
    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name: "Prashant"
        };
        setUserName(data.name);
    } , []);    
    return (
            // Step 1.1 - After create Redux store, provide store to React APP  
            <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser : userName , setUserName}} >
            <div className="app">
                <Header />
                <Outlet />
            </div>
            </UserContext.Provider>
            </Provider>
    ) 
    
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
            path: "/cart",
            element: <Cart />
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