import React, {Component} from 'react';
import Skill from './SkillCircle.jsx';
import Header from '../Header/Header.jsx';

class Skills extends Component {
    render() {
        let headingStyle = {
            "paddingTop": "3%",
            "textAlign": "center",
            "fontSize": "28px",
            "fontFamily": "sarif",
            "color": "rgb(138, 158, 179)",
            "padding":"3%"
        };
        let underline = {
            "display" :"inline-block",
            "width" : "300px",
            "borderBottom":"groove",
            "borderBottomLeftRadius":"100px",
            "borderBottomRightRadius":"100px",
            "borderBottomStyle" :"1px solid"
        };
        let fullHeightWidth = {
            "width" : "100%",
            "height" : "100%"
        };
        let headerImageDiv = {
            "textAlign": "center",
            "display":"block",
            "width" : "100%",
            "height" : "100%",
            "position" : "relative"
        };
        let backgroundColors = {
            "Server Side Technologies" : "red",
            "Client Side Technologies" : "green",
            "Java Technologies" : "blue",
            "Frameworks and Libraries" : "yellow",
            "DBMS and ORM" : "orange"
        };
        let aligntech = {
          "textAlign" : "center",
            "overflow" : "hidden",
            "paddingLeft" : "3%"
        };
        let techCat = {
            "marginTop" : "3%",
          "float" : "left",
            "color" : "#9DB9CE",
            "display" : "inline-block",
            "width" : "200px",
            "textAlign" : "left"
        };
        return (
            <div style={fullHeightWidth}>
                <Header image={this.props.about.img} Name={this.props.about.Name} />
                <div style={headingStyle}>
                    <span style={underline}>Technical Skill Set</span>
                </div>
                <div style={headerImageDiv}>
                    {
                        Object.keys(this.props.skills).map(key=> {
                            return (
                                <div style = {aligntech}>
                                    <span style={techCat}> {key} </span>
                                {
                                    this.props.skills[key].map(skill=> {
                                        return (
                                            <Skill color={backgroundColors[key]} skill={skill}/>
                                        )
                                    })
                                }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}
export default Skills;