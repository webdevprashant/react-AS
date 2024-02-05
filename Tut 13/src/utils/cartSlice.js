import { createSlice, current } from "@reduxjs/toolkit"
// Redux store contains multiple slices - Step 2
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        // items: ["Burger", "Pizza"]           
        items: []           // Initially cart items is an empty array
    },
    reducers: {
        // disPatch (Action) - addItem
        addItem: (state, action) => {    // This function is a reducer function, modify state based on actions
            // mutating the state here
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        // original state = {items : ["pizza"]}
        clearCart: (state) => {            
            // RTK says either mutate existing state or return new State 
            state.items.length = 0;   // make your items length 0 
            // OR
            // return {items: []};  // the new [] will be replaced inside originalState []
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
// console.log(state);   // NOT WORK
// console.log(current(state));  // WORK