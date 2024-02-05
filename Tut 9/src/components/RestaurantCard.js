import { RES_LOGO } from "../utils/constants";
const RestaurentCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } = resData.info; 
        return (
        <div className="m-4 p-4 max-w-[200px] bg-gray-300 rounded-lg hover:bg-gray-200">
            <img className="res-logo rounded-lg" src={ RES_LOGO + cloudinaryImageId} />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{avgRating}</h4>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurentCard;