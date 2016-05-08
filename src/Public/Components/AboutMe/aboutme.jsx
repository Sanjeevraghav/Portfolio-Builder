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
            "paddingTop": "3%",
            "textAlign": "center",
            "fontSize": "28px",
            "fontFamily": "sarif",
            "color": "rgb(138, 158, 179)",
            "padding":"3%"
        };
        let descWrapper= {
          "paddingLeft" : "8%",
          "paddingRight" : "8%",
          "paddingTop" : "3%"
        };
        let underline = {
            "display" :"inline-block",
            "width" : "200px",
            "borderBottom":"groove",
            "borderBottomLeftRadius":"100px",
            "borderBottomRightRadius":"100px",
            "borderBottomStyle" :"1px solid"
        };
        return (
            <div>
                <Header image={this.props.about.img} Name={this.props.about.Name} />
                <div style={headingStyle}>
                    <span style={underline}>About Me</span>
                </div>
                <div style={descWrapper}>
                    <span style={textStyle}>{this.props.about.description}</span>
                </div>
            </div>
        );
    }
}
export default AboutMe;