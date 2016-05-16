import React, {Component} from 'react';
import circlecss from './circle.css';

class SkillCircle extends Component {
    render() {
        let size = this.props.size || "small";
        let ratingno = "c100 " + "p"+this.props.skill.Rating+ " " + size;
        return (
                <div className={ratingno}>
                    <span>{this.props.skill.Techology}</span>
                    <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                    </div>
                </div>
        );
    }
}
export default SkillCircle;