import { useEffect, useState } from "react";
import { resList } from "../utils/mocklist";
import RestaurentCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    // State Variable Super power variable
    // let [ listOfRestaurents, setlistOfRestaurents ] = useState(resList);  // State variable
    let [ listOfRestaurents, setlistOfRestaurents ] = useState([]);  // Data comes from API
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurent , setFilteredRestaurent] = useState([]);

    useEffect(() => { fetchData()  } , []);
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log("API DATA" , json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setlistOfRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
        setFilteredRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
    }

    console.log("Body Rendered...");
    return listOfRestaurents.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => setSearchText(e.target.value) } />
                    <button onClick={() =>  {
                        const filteredRestaurent = listOfRestaurents.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRestaurent(filteredRestaurent)
                    }
                        }>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                        // Filter Top rating restaurants
                        let filteredRes = filteredRestaurent.filter(res => res.info.avgRating > 4.3);
                        setFilteredRestaurent(filteredRes); 
                    }}>Top Rated Restaurants</button>
            </div>

            <div className="res-container">
                {
                    filteredRestaurent.map((restaurant) => (
                        <RestaurentCard key={restaurant.info.id} resData={restaurant} />
                    ))
                };

            </div>
        </div>
    );
};

export default Body;