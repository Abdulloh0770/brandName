import React from 'react'
import "./AboutCard.css"
import user from "../../img/user.png"

class AboutCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = props;
    }

    render() {
        return <div className="aboutCard h-100">
            <img src={user} alt="rasm" />
            <div>
                <p className="fw-bold mb-2">{this.state.title}</p>
                <p className="mb-0">{this.state.subtitle}</p>
            </div>
        </div>
    }
}

export default AboutCard;