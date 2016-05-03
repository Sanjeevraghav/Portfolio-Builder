import React, {Component} from 'react';

class Degree extends Component {
    render() {
        let educationDiv = {
            "width" :"46%",
            "height":"100%",
            "float":"left",
            "color":"white",
            "padding":"2%",
            "margin":"2%",
            "backgroundColor":"rgb(28, 47, 63)"
        };
        let table = {
            "width" :"100%"
        };
        let edu = this.props.degree;
        return (
            <div style={educationDiv}>
                <table style={table}>
                    {
                        Object.keys(edu).map(function(key){
                            return (<tr>
                                <td>{key}</td>
                                <td>{edu[key]}</td>
                            </tr>)
                        })
                    }
                </table>
            </div>
        );
    }
}
export default Degree;