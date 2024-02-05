import { RES_LOGO } from "../utils/constants";
const RestaurentCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } = resData.info; 
        return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" src={ RES_LOGO + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{avgRating}</h4>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurentCard;