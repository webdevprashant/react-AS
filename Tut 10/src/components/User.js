import { useState } from "react";

const User = ({props}) => {
    console.log(props);
    const [count] = useState(0);
    const [count2] = useState(0);
    return (
     <div className="user-card">
        <h1>Count = {count}</h1>
        <h2>Name: Prashant</h2>
        <h3>Location: Agra</h3>
        <h4>Contact: prashant@alliance</h4>
     </div>   
    );
}

export default User;