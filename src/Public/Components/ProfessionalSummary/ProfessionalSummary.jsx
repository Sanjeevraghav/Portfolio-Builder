import React, {Component} from 'react';
import Header from '../Header/Header.jsx';

class ProfessionalSummary extends Component {
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
            "padding" : "2%"
        };
        let underline = {
            "display" :"inline-block",
            "width" : "350px",
            "borderBottom":"groove",
            "borderBottomLeftRadius":"100px",
            "borderBottomRightRadius":"100px",
            "borderBottomStyle" :"1px solid"
        };
        return (
            <div>
                <Header image={this.props.about.img} Name={this.props.about.Name} />
                <div style={headingStyle}>
                    <span style={underline}>Professional Summary</span>
                </div>
                <div style={descWrapper}>
                    <ul>
                        {
                            this.props.summary.map(function(point) {
                               return <li key={point} style={textStyle}><span>{point}</span></li>
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
export default ProfessionalSummary;