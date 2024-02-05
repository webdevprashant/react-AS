import { RES_LOGO } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({items}) => {
    // console.log(items);
    // Step 3 - Dispatch and action call Reducer fn (Action)
    const disPatch = useDispatch("Pizza");
    const handleAddItem = (item) => {
        disPatch(addItem(item))             // Add item to cart
    }
    return <div>
        {
            items?.map((item) => (
                <div data-testid="foodItems" key={item?.card?.info?.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    <div className="w-9/12">
                    <div className="py-2">
                        <span className="font-semibold">{item?.card.info?.name}</span>
                        <span> {"  "} - {"  "}💲{item?.card.info?.price / 100}</span>
                    </div>
                    <p className="font-light p-2">{item?.card?.info?.description}</p>
                    </div>

                    <div className="w-3/12 p-4">
                                <div className="absolute ">
                            <button className="p-2 mx-8 bg-black text-white rounded-lg text-sm  shadow-lg" onClick={() => handleAddItem(item)}>Add + </button>
                                </div>

                            <img src={RES_LOGO + item?.card?.info?.imageId} className="w-34" />
                    </div>
                </div>
            ))
        }
    </div>
}

export default ItemList;