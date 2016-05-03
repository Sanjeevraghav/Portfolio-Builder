import React, {Component} from 'react';
import homecss from './home.css';
import Humbergur from '../UtilityComponents/HumbergerMenu.jsx';

class Home extends Component {
    render() {
        return (
            <div className="properDivInner">
                <Humbergur />
                <div className="nameClass properDiv">
                    <img className="img-circle animate animateDown" src={'/../Images/'+this.props.home.img}/>
                </div>
                <div className="white_l_txt">
                    <span className="animate animateLeft"><span className="white_sm_txt">I'M</span>&nbsp;<span>{this.props.home.Name}</span>&nbsp;<span
                    className="white_sm_txt">&</span></span>
                </div>
                <div className="properDiv white_sm_txt">
                    <span className="animate animateRight"><span className="white_sm_txt">I'M A</span>&nbsp;<span
                    className="white_l_txt">{this.props.home.Designation}</span></span>
                </div>
            </div>
        );
    }
}
export default Home;