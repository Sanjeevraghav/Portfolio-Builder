import React, {Component} from 'react';
import Header from '../Header/Header.jsx';

class ContactDetails extends Component {
    render() {
        return (
            <div>
                <Header image={this.props.about.img} Name={this.props.about.Name}/>
                {
                    this.props.contact.Mobile.map(Mobile=> {
                       return (<div>
                           <span>{Mobile["Country Code"]}</span>
                           <span>{Mobile.Number}</span>
                       </div>)
                    })
                }
                <div>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <span>Name</span>
                            </td>
                            <td>
                                <input type="text"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>Email</span>
                            </td>
                            <td>
                                <input type="text"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>Message</span>
                            </td>
                            <td>
                                <textarea type="text"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            </td>
                            <td>
                                 <button>Send</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                >
            </div>
    );
    }
    }
    export default ContactDetails;