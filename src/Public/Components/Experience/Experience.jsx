import React, {Component} from 'react';
import Header from '../Header/Header.jsx';

class Experience extends Component {
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
            "paddingBottom": "1%"
        };
        let companyDesc = {
            "textAlign": "center",
            "fontSize": "22px",
            "fontFamily": "sarif",
            "color": "rgb(138, 158, 179)",
            "margin": "1%",
            "margin-bottom":"2%"
        };
        let descWrapper = {
            "padding": "2%"
        };
        let underline = {
            "display" :"inline-block",
            "width" : "250px",
            "borderBottom":"groove",
            "borderBottomLeftRadius":"100px",
            "borderBottomRightRadius":"100px",
            "borderBottomStyle" :"1px solid"
        };
        return (
            <div>
                <Header image={this.props.about.img} Name={this.props.about.Name}/>
                <div style={headingStyle}>
                    <span style={underline}>Experience</span>
                </div>
                <div style={descWrapper}>
                    <div style={companyDesc}>
                        <div>
                            <span>{this.props.experience.Name}</span>
                        </div>
                        <div>
                            <span>{this.props.experience.Position}</span>
                        </div>
                        <div>
                            From <span>{this.props.experience.Start}</span> to <span>{this.props.experience.End}</span>
                        </div>
                    </div>
                    <ul>
                        {
                            this.props.experience.ResponsibilitiesAndAchievements.map(function (point) {
                                return <li key={point} style={textStyle}><span>{point}</span></li>
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
export default Experience;