import { useContext } from "react";
import { RES_LOGO } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurentCard = (props) => {
    const { loggedInUser } = useContext(UserContext);
    const { resData } = props;
    // console.log(resData);
    const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } = resData.info; 
        return (
        <div data-testid="resCard" className="m-4 p-4 max-w-[200px] bg-gray-300 rounded-lg hover:bg-gray-200">
            <img className="res-logo rounded-lg" src={ RES_LOGO + cloudinaryImageId} />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{avgRating}</h4>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
            <h4 className="font-bold">{loggedInUser}</h4>
        </div>
    );
};


// Higher Order Components -> Input - RestaurantCard ==> O/P - > RestaurantCardPromoted 
export const withPromotedLabel = (RestaurentCard) => {
    return (props) => {
        return (
        <div>
            <label className="absolute text-white bg-black m-2 p-2 rounded-lg">Opened</label>
            <RestaurentCard {...props} />
        </div>
        );
    };
};

export default RestaurentCard;