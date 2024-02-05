import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_ALL_RESDATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// Jest won't understand fetch (Browser power) , So we are creating mock fn like fetch
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_ALL_RESDATA);
    },
  });
});

it("Should render the Body Component with Search burger component", async () => {
    // render(<Body />);   // If your component has async operation (Update state component), you have to wrap your component inside act function comes from react-dom/test-utils
    /*
    JEST won't understand fetch - Need to write mock fetch function
    */
    await act(async () => 
        render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
        )
    );

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    // console.log(cardsBeforeSearch , cardsBeforeSearch.length);
    expect(cardsBeforeSearch.length).toBe(9); 

    const searchBtn = screen.getByRole("button" , {name: "Search"});
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput , { target: { value: "burger" } });            // Added burger to input box
    fireEvent.click(searchBtn);                                                 // On click search button
    // On Click - screen should load 4 cards (According to manual search in current swiggy api result)   
    // const cardsAfterSearch  = screen.getAllByTestId("resCard");
    // console.log("CARD AFTER SEARCH" , cardsAfterSearch.length);
    // expect(cardsAfterSearch.length).toBe(1);
});

it("Shoud Render Filter top rated restaurants." , async () => {
    await act(async () => 
        render(
           <BrowserRouter>
                <Body />
           </BrowserRouter> 
        )
    )

    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(9);

    const topRatedFilteredRest = screen.getByRole("button" , {name: "Top Rated Restaurants"});
    fireEvent.click(topRatedFilteredRest);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(4);
});