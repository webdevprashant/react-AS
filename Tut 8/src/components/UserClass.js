import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.name, "Child Class Constructor Rendered.");
        // this.state = {
        //     count: 0,
        //     count2: 1,
        //     count3: 1,
        //     count4: 1,
        //     count5: 1
        // }
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Dummy"
            }
        };
    }

    // componentDidMount() {
    //     // console.log(this.props.name, "Child Component Did mount Render.");
    // }
    async componentDidMount() {
        const result = await fetch("https://api.github.com/users/akshaymarch7");
        // const result = await fetch("https://github.com/webdevprashant");
        const json = await result.json();
        this.setState({userInfo: json })
        console.log("Child Component Did mount Render.");
    }

    componentDidUpdate() {
        console.log("Child Component Did update");
    }
    componentWillUnmount() {
        console.log("Component will Unmount");
    }

    render() {
        // const { name, location } = this.props;
        // const { count , count2} = this.state;
        // console.log(this.props.name, "Child Classs Render Rendered.");
        console.log("Child Classs Render Rendered.");
        const {name, location , avatar_url } = this.state.userInfo;
        return (
            <div className="user-card">
                {/* <h1>Count : {count}</h1>
                <h1>Count : {count2}</h1>
                <button onClick={() => this.setState({count: this.state.count + 1 , count2: this.state.count2 + 2 })}>Count Increase</button>   */}
                {/* update only count , count2 state variables, wont touch other vars */}
                <h2>Name: Corporate Ministry</h2>
                <h3>Location: MiniPlisminis</h3>
                <h4>Contact: corporateMinistry@1999</h4>
                <p>{name}</p>
                <p>{location}</p>
                <p><img src={avatar_url} /></p>
                {/* <p>Props: {name}</p>
                <p>Props: {location}</p> */}
            </div>
        );
    }
}

export default UserClass;