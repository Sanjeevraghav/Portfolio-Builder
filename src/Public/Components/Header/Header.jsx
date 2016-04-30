import React, {Component} from 'react';
import Humberger from '../UtilityComponents/HumbergerMenu.jsx';

class Header extends Component {
    render() {
        let header = {
            "backgroundColor": "rgb(28, 47, 63)",
            "overflow": "hidden",
            "padding": "5px",
            "marginLeft": "2px",
            "marginRight": "2px",
            "opacity":"1"
        };
        let headerImage = {
            "width": "20%",
            "height": "20%",
        };
        let headerImageDiv = {
            "textAlign": "right",
            "display":"inline-block"
        };
        let headerName = {
            "paddingTop": "1%",
            "textAlign": "left",
            "fontSize": "40px",
            "fontFamily": "cursive",
            "color": "rgb(157, 185, 206)"
        };
        return (
            <div style={header}>
                <div className="col-md-2 col-lg-2 col-sm-2">
                    <Humberger />
                </div>
                <div className="col-md-4 col-lg-4 col-sm-4" style={headerImageDiv}>
                    <img className="img-circle" style={headerImage} src={'/../Images/'+this.props.image}/>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-6" style={headerName}>
                    <span>{this.props.Name}</span>
                </div>
            </div>
        );
    }
}
export default Header;