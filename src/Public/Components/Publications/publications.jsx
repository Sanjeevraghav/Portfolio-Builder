import React, {Component} from 'react';
import Header from '../Header/Header.jsx';

class Publication extends Component {
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
            "padding": "3%"
        };
        let descWrapper = {
            "paddingLeft": "31%",
            "paddingRight": "8%",
            "paddingTop": "3%"
        };
        let underline = {
            "display": "inline-block",
            "width": "350px",
            "borderBottom": "groove",
            "borderBottomLeftRadius": "100px",
            "borderBottomRightRadius": "100px",
            "borderBottomStyle": "1px solid"
        };
        return (
            <div>
                <Header image={this.props.about.img} Name={this.props.about.Name}/>
                <div style={headingStyle}>
                    <span style={underline}>Journals & Publications</span>
                </div>
                <div>
                    {
                        this.props.publication.map(publication => {
                            return (<div>
                                <div style={descWrapper}>
                                    <span style={textStyle}>{publication.Title}</span>
                                </div>
                                <div style={descWrapper}>
                                    <span style={textStyle}>{publication.publisher}</span>
                                </div>
                                <div style={descWrapper}>
                                    <span style={textStyle}>{publication.Volume}</span>
                                </div>
                            </div>)
                        })
                    }
                </div>
            </div>
        );
    }
}
export default Publication;