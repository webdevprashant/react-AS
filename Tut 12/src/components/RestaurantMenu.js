import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const { resId } = useParams();

    // OWN Custom Hook
    const resInfo = useRestaurantMenu(resId);

    const [showIndex , setShowIndex] = useState(null);

    if (resInfo === null) return <Shimmer />;

    let { name , cuisines , costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(item => item?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log("Categories " , categories , categories.length);
    return (
        <div className="text-center">
            <h1 className="font-bold text-2xl my-7">{name}</h1>
            <p className="font-bold text-lg my-2">{cuisines.join(" ,")} - {costForTwoMessage}</p>
            {/* categories accordians */}
            <RestaurantCategory />
            { categories.map((category , index) => ( <RestaurantCategory key={category?.card?.card.title} data={category?.card?.card} 
              showItems={ index == showIndex ? true : false}
              setShowIndex= {() => setShowIndex(index)}
              /> ) )}
        </div>
    );
};

export default RestaurantMenu;