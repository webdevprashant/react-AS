import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import '@testing-library/jest-dom';


// UNIT TESTING (Testing component in Isolation)
describe("Contact Us Page Test cases" , () => {

    // beforeAll(() => {                           // Before start all test cases it will call this fn
    //     console.log("Before All.");
    // });

    // beforeEach(() => {
    //     console.log("Before Each")
    // })
    test('should load contact us component', () => { 
        render(<Contact />);
        const heading = screen.getByRole("heading");
        // Assertion
        expect(heading).toBeInTheDocument();
    });
    
    test('should load button inside contact component', () => { 
        render(<Contact />);
        // const button = screen.getByRole("button");
        // // Assertion
        // expect(button).toBeInTheDocument();
        const submit = screen.getByText("Submit");
        // Assertion
        expect(submit).toBeInTheDocument();
     })
    
    // test('should load button inside contact component', () => { 
    //     render(<Contact />);
    //     const button = screen.getByText("Random");
    //     // Assertion
    //     expect(button).toBeInTheDocument();
    // });
    
    it('should load input name with PlaceHolder by contact component', () => { 
        render(<Contact />)
        const placeholder = screen.getByPlaceholderText("Name");
        expect(placeholder).toBeInTheDocument();
     })
    
    it('should load 2 input boxes or not in Contact component.' , () => {
        render(<Contact />)
        const inputBoxes = screen.getAllByRole("textbox");
        // console.log(inputBoxes);
        expect(inputBoxes.length).toBe(2);
        expect(inputBoxes.length).not.toBe(3);
    });

    // afterAll(() => {                           // After end all test cases it will call this fn
    //     console.log("After All.");
    // });

    // afterEach(() => {                           // After Each test cases it will call this fn
    //     console.log("After Each.");
    // })
})