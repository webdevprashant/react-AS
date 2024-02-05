import React from "react";
import ReactDOM from "react-dom/client";

// Babel -> React Create element => React Element JS Object => HTML Element (Render) 
// const heading = React.createElement("h1" , {id: "head"} , "Namaste React 3");   // OBJ   WAY 1 to create react element

// Babel -> JSX => React Create element => React Element JS Object => HTML Element (Render) 

// const headingElement = <h1 id="heading" className="new">This is the game</h1> // JSX React Element (Single Line)

const anotherElement = ( <h1>This is the another Element</h1> );
const headingElement = ( 
                <div>
                    <h1 id="heading" 
                    className="new">This is the game</h1> // JSX React Element (Multi Line)
                    {anotherElement} React another element inside heading  Element
                </div>
            );
// const headingElement = (
//     <h1 id="heading" tabIndex="1">This is the game</h1>         // WAY 2 to create react element
// );

const a = 10;
const HeadingComponent = () => {
    return (
        <div>
            <h1> This is the React Heading Component.</h1>   
            <h3>{a}</h3>
            <h2>{headingElement} React Element inside Component</h2>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(headingElement);  // Render react Element
root.render(HeadingComponent());  // Render react Component  // OR <HeadingComponent></HeadingComponent> OR {HeadingComponent()}