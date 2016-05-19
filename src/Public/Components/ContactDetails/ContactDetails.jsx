import React, {Component} from 'react';
import Header from '../Header/Header.jsx';

class ContactDetails extends Component {
    render() {
        let alignDiv = {
            "float": "left",
            "width": "50%",
            "minHeight": "100%",
            "height": "80vh",
            "color": "white",
            "padding": "5%",
            "borderRight": "2px solid rgb(0, 0, 0)",
            "borderLeft": "2px solid rgb(0, 0, 0)",
            "borderRadius": "10%"
        };
        let colWidth = {
            "width": "50%"
        };
        let icon = {
            "fontSize": "30px"
        };
        let contact = {
            "padding": "0% 5% 5% 30%"
        };
        let txtareaStyle = {
            "height": "30vh"
        };
        let showMessage = function(){
            alert("hello");
        };
        let parentIconDiv = {
            "width" : "100px",
            "position" : "absolute",
            "left" : "calc(50% - 30px)",
            "top" : "calc(50% - 60px)"
        };
        let socialicon = {
          "width" : "30px",
            "height" : "30px"
        };
        let alignicon = "right";
        return (
            <div>
                <Header image={this.props.about.img} Name={this.props.about.Name}/>
                <div style={parentIconDiv}>
                    {
                        this.props.contact.Links.map( link => {
                            let style= {
                                "textAlign" : alignicon,
                                "width" : "60px"
                            };
                            alignicon = (alignicon === "left") ? "right" : "left";
                           return (
                               <div style={style}>
                                   <a href={link.src} target="_blank">
                                       <img src={"../../Images/"+link.icon} style={socialicon}/>
                                   </a>
                               </div>
                           )
                        })
                    }
                </div>
                <div style={alignDiv}>
                    <div style={contact}>
                        <div>
                            <span style={icon}
                                  className="glyphicon glyphicon-envelope"> </span>&nbsp;&nbsp;{this.props.contact.Email}
                        </div>
                        {
                            this.props.contact.Mobile.map(Mobile=> {
                                return (<div>
                                    <span style={icon} className="glyphicon glyphicon-phone"> </span>&nbsp;&nbsp;
                                    <span>{Mobile["Country Code"]}</span>&nbsp;
                                    <span>{Mobile.Number}</span>
                                </div>)
                            })
                        }
                    </div>
                    <div className="table-responsive">
                        <table className="table table-condensed">
                            <tbody>
                            <th>Parmanent Address</th>
                            {
                                Object.keys(this.props.contact.PermanentAddress).map(key => {
                                    return (<tr>
                                        <td style={colWidth}>{key}</td>
                                        <td style={colWidth}>{this.props.contact.PermanentAddress[key]}</td>
                                    </tr>)
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-condensed">
                            <tbody>
                            <th>Correspondence Address</th>
                            {
                                Object.keys(this.props.contact.LocalAddress).map(key => {
                                    return (<tr>
                                        <td style={colWidth}>{key}</td>
                                        <td style={colWidth}>{this.props.contact.LocalAddress[key]}</td>
                                    </tr>)
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div style={alignDiv}>
                    <form id="message" role="form" method="POST" action="/message">
                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input type="text" name="name" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label for="email">Email address:</label>
                            <input type="email" name="email" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label for="message">Message:</label>
                            <textarea name="message" style={txtareaStyle} type="text" className="form-control"/>
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                    </form>

                </div>
            </div>
        );
    }
}
export default ContactDetails;