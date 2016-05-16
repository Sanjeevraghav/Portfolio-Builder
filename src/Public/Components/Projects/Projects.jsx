import React, {Component} from 'react';
import Header from '../Header/Header.jsx';
import Technology from '../Skills/SkillCircle.jsx';

class Projects extends Component {
    render() {
        let textStyle = {
            "textAlign": "justify",
            "fontSize": "20px",
            "fontFamily": "sarif",
            "color": "rgb(138, 158, 179)"
        };
        let techStyle = {
            "textAlign": "center",
            "fontSize": "20px",
            "fontFamily": "sarif",
            "color": "rgb(138, 158, 179)",
            "minWidth" : "17%",
            "float" : "left",
            "margin":"1%",
            "padding" : "1%",
            "backgroundColor" : "#1C2F3F",
            "listStyle" :"none",
            "borderRadius": "40%",
            "boxShadow": "1px 1px 2px blue"
        };
        let centerAlign = {
          "overflow" :"hidden",
            "textAlign" : "center"
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
            "paddingLeft": "8%",
            "paddingRight": "8%",
            "paddingTop": "3%"
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
                    <span style={underline}>Project</span>
                </div>
                <div style={descWrapper}>
                    <div style={companyDesc}>
                        <div>
                            <span>{this.props.project.Title}</span>
                        </div>
                        <div>
                            <span>{this.props.project.Company}</span>
                        </div>
                    </div>
                    <ul>
                        {
                            this.props.project.Description.map(desc => {
                                return <li key={desc} style={textStyle}><span>{desc}</span></li>
                            })
                        }
                    </ul>
                    <div style={companyDesc}>
                        <div>
                            <span>Technologies</span>
                        </div>
                    </div>
                    <div style={centerAlign}>
                        {
                            this.props.project.Technologies.map(tech => {
                                let skill = {"Techology" : tech, "Rating" : "50"}
                               return (<Technology skill={skill} />);
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}
export default Projects;