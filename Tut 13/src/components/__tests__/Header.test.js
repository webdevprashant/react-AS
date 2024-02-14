import { fireEvent, render, screen } from "@testing-library/react"; 
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header Component with a login button" , () => {
    render( 
    // Header component render successfully or not
    <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" } );
    // const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with a Cart Item" , () => {
    render( 
    // Header component render successfully or not
    <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    );

    // const cartItems = screen.getByText("Cart 0");   // Match ekject string
    const cartItems = screen.getByText(/Cart/);   // Use Regex

    expect(cartItems).toBeInTheDocument();
});


it("Should change Login button to Logout on click" , () => {
    render( 
    // Header component render successfully or not
    <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button" , {name: "Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button" , {name: "Logout"});
    expect(logoutButton).toBeInTheDocument();
});

it("Should check user Offline OR Online or not" , () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    );

    // const checkStatus = screen.getByText("Online Status : ✅");
    // OR
    const checkStatus = screen.queryByText("🔴");
    expect(checkStatus).toBeNull();
});

it("Should check login and logout in Header" , () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button" , {name: "Login"});       // get login button
    fireEvent.click(loginButton);                       // After click on login button
    expect(screen.getByRole("button" , {name: "Logout"})).toBeInTheDocument();  // after click login button, logout should expect

})