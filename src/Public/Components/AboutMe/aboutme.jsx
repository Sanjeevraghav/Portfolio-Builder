import React, {Component} from 'react'

class AboutMe extends Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
}
export default AboutMe;