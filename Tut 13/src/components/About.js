import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
    constructor(props) {
        super(props);
        // console.log("Parent About constructor Component");
    }

    componentDidMount() {
        // console.log("Parent Component Did mount Render.");
    }

    render() {
        // console.log("Parent About Render Component");
        return(
            <div>
                <UserContext.Consumer>
                    {({loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
                </UserContext.Consumer>
                <h1>About Class Component</h1>
                <h2>This is SDE</h2>
                <UserClass name={"First"} location={"Agra"} />
            </div>
        );   
    }
}

// const About = () => {
//     return (
//     <div>
//         <h1>About</h1>
//         <h2>This is SDE</h2>
//         {/* <User name={"Prashant the F5 Connects (Function)"} location={"Agra"} /> */}
//         <UserClass name={"Prashant the F5 Connects (Class)"} location={"Agra"} />
//     </div>
//     );
// }
export default About;