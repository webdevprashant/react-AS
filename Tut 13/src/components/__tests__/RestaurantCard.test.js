import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";        // Takes props as resData
import { withPromotedLabel } from "../RestaurantCard";
import Mock_Data from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props Data" , () => {
    render(<RestaurantCard resData={Mock_Data} />);
    const resName = screen.getByText("La Pino'z Pizza");
    // const resName = screen.getByText("abc");       // Not exist
    expect(resName).toBeInTheDocument();
});

it("Should render RestaurantCard component with Promoted Label" , () => {
    // HOMEWORK Test Higher order component withPromotedLabel();
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    render(<RestaurantCardPromoted resData={Mock_Data} key={Mock_Data.info.id} />)
    const res = screen.getAllByText("Opened");
    console.log(res);
    expect(res.length).toBe(1);  // 1 is showing bcz of mock data

});