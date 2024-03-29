import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Dummy"
            }
        };
    }

    async componentDidMount() {
        const result = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await result.json();
        this.setState({userInfo: json })
    }

    render() {
        const {name, location , avatar_url } = this.state.userInfo;
        return (
            <div className="user-card">
                <h2>Name: Corporate Ministry</h2>
                <h3>Location: MiniPlisminis</h3>
                <h4>Contact: corporateMinistry@1999</h4>
                <p>{name}</p>
                <p>{location}</p>
                <p><img src={avatar_url} /></p>
            </div>
        );
    }
}

export default UserClass;