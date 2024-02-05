// import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data , showItems, setShowIndex}) => {
    // const [showItems, setShowItems] = useState(false);
    const handleClick = () => {
        // !showItems ? setShowItems(true) : setShowItems(false);
        // OR
        // setShowItems(!showItems);
        setShowIndex();
    }
    return (
    <div>
        {/* Header */}
        <div className="w-6/12 bg-slate-50 mx-auto my-4 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data?.title || "Recommended"} ({data?.itemCards.length || 0})</span>
                <span>⬇️</span>
            </div>

            { showItems && <ItemList items={data?.itemCards} /> }        
        </div>
        {/* Accordian Body */}
    </div>
    );
}

export default RestaurantCategory;