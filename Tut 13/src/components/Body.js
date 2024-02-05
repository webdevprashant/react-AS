import { useContext, useEffect, useState } from "react";
import RestaurentCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    // State Variable Super power variable
    let [ listOfRestaurents, setlistOfRestaurents ] = useState([]);  // Data comes from API
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurent , setFilteredRestaurent] = useState([]);
    
    const onlineStatus = useOnlineStatus();
    const RestaurantCardPromoted = withPromotedLabel(RestaurentCard);

    useEffect(() => { fetchData()  } , []);

    // Modify Context
    const {loggedInUser, setUserName} = useContext(UserContext);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json);
        setlistOfRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
        setFilteredRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
    }
    
    
    if (!onlineStatus) return <h1 data-testid="status">Looks like you are offline, Please check your internet connection</h1>
    return listOfRestaurents.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="flex">
                <div className="search p-2 m-2">
                    <input type="text" data-testid="searchInput" className="p-1 m-2 border border-solid border-black" value={searchText} onChange={(e) => setSearchText(e.target.value) } />
                    <button 
                        className="px-2 py-2 m-1 bg-green-300 rounded-lg"  
                        onClick={() =>  {
                        const filteredRestaurent = listOfRestaurents.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRestaurent(filteredRestaurent)
                        console.log(filteredRestaurent);
                    }
                        }>Search
                    </button>

                </div>

                <div className="m-2 p-2 flex items-center">
                <button className="px-2 py-2 m-1 bg-green-300 rounded-lg" onClick={() => {
                        // Filter Top rating restaurants
                        let filteredRes = filteredRestaurent.filter(res => res.info.avgRating > 4.3);
                        setFilteredRestaurent(filteredRes); 
                    }}>Top Rated Restaurants</button>
                </div>

                <div className="m-2 p-2 flex items-center" >
                    <label>UserName : </label>
                    <input className="border border-black p-2 outline-none mx-1" value={loggedInUser} onChange={(e) => setUserName(e.target.value) } />
                </div>

            </div>

            <div className="res-container flex flex-wrap items-center justify-center" >
                {
                    // If isPromted is true, add label Promoted in RestaurantCard 
                    filteredRestaurent.map((restaurant) => (
                        // <RestaurentCard key={restaurant.info.id} resData={restaurant} />
                        <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}> 
                                {
                                    restaurant.info.isOpen ? (<RestaurantCardPromoted resData={restaurant} />) : (<RestaurentCard resData={restaurant} />)  
                                }
                       </Link>
                    ))

                };
            </div>
        </div>
    );
};

export default Body;