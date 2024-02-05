/*
<div id="parent">
    <div id="child">
        <h1> </h1>
    </div>
    <div id="child2">
        <h3> </h3>
    </div>

    // Created Nested Structure using react
</div>
*/

const heading = React.createElement("h1" , {id: "heading"} , "Hello World");     // Heading is object
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);       // Convert heading obj to html element and give it to DOM

const parent = React.createElement("div" , {id: "parent"} , 
            [React.createElement("div" , { id : "child" } , 
            [React.createElement("h1" , { id: "head1" }, "This is Heading 1" ), 
            React.createElement("h2" , { id: "head2" }, "This is Heading 2" )]  //Create Siblings
        ), 

        React.createElement("div" , { id : "child2" } , React.createElement("h3" , { id: "head3" }, "This is Heading 3" ))
]);     

root.render(parent);
