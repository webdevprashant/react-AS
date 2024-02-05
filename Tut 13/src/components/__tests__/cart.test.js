import { fireEvent, render, screen } from "@testing-library/react";
import {act} from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Card from "../Cart";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn( () => 
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
)
it("Shoud load restaurant menu component" , async () => {
    // Render Header, RestaurantMenu component
    await act(async () => render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header />    
        <RestaurantMenu />
        <Card />
        </Provider>
    </BrowserRouter>
    ))

    const accordianHeader = screen.getByText("Desserts (2)");
    fireEvent.click(accordianHeader);       // Click on accordian to expand collapsed items

    const foodIt = screen.getAllByTestId("foodItems");
    expect(foodIt.length).toBe(2);

    expect(screen.getByText("Cart 0")).toBeInTheDocument(); // before clicking add button, Cart items 0

    const addBtns = screen.getAllByRole("button" , { name: "Add +" })
    fireEvent.click(addBtns[0]);

    // After click on Add + Button, my header should change.

    // Step 1 load header component
    expect(screen.getByText("Cart 1")).toBeInTheDocument(); 

    fireEvent.click(addBtns[1]);
    expect(screen.getByText("Cart 2")).toBeInTheDocument(); 


    // Go to Cart component, Check it contains 2 items or not
    
    // Cart using same ItemList (In RestaurantMenu component contains foodItems testid)
    // expect(screen.getAllByTestId("foodItems").length).toBe(2);  // not 2 its 4 bcz 2 from Restaurant Menu, 2 from Cart bcz we are rendering both components in cart.test.js
    expect(screen.getAllByTestId("foodItems").length).toBe(4);

    fireEvent.click(screen.getByRole("button" , {name: "Clear Cart"}));  // on clicking clear cart
    expect(screen.getAllByTestId("foodItems").length).toBe(2);

    expect(screen.getByText("Cart is Empty, Please add some items to the cart.")).toBeInTheDocument();
});