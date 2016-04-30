import React, {Component} from 'react';
import Header from '../Header/Header.jsx';

class AboutMe extends Component {
    render() {
        let textStyle = {
            "textAlign": "justify",
            "fontSize": "20px",
            "fontFamily": "sarif",
            "color": "rgb(138, 158, 179)",
        };
        let headingStyle = {
            "paddingTop": "5%",
            "textAlign": "center",
            "fontSize": "25px",
            "fontFamily": "sarif",
            "color": "rgb(138, 158, 179)",
            "padding":"3%"
        };
        let descWrapper= {
          "padding" : "2%"
        };
        return (
            <div>
                <Header image={this.props.about.img} Name={this.props.about.Name} />
                <div style={headingStyle}>
                    <span>About Me</span>
                </div>
                <div style={descWrapper}>
                    <span style={textStyle}>{this.props.about.description}</span>
                </div>
            </div>
        );
    }
}
export default AboutMe;