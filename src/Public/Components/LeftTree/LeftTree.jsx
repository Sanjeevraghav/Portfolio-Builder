import React, {Component} from 'react';
import { Link } from 'react-router';
import leftTreeCss from './LeftTree.css';

class LeftTree extends Component {
    render() {
        let lefttreeDataSource = this.props.leftTreeDataSource;
        let backgroundcolors = ["rgb(178,59,30)","rgb(107,186,112)","rgb(78,92,127)","rgb(241,249,210)","rgb(216,121,40)"];
        let i = 0;
        return (
            <ul className="leftTreeul">
                {
                    Object.keys(lefttreeDataSource).map(key=> {
                        if (!Array.isArray(lefttreeDataSource[key])) {
                            let liStyle = {
                                "backgroundColor" : backgroundcolors[i++]
                            };
                            if(i === 4){i=0;}
                            return (<li className="leftTreeli" style={liStyle}>
                                <Link className="leftTreeLink" to={lefttreeDataSource[key]}>{key}</Link>
                            </li>)
                        }
                        else {
                            return (
                                <li>
                                    {key}
                                        {
                                            lefttreeDataSource[key].map(subList=> {
                                               return ( <ul className="leftTreeInnerul">
                                                   {
                                                       Object.keys(subList).map(key=> {
                                                           let liStyle = {
                                                               "backgroundColor" : backgroundcolors[i++]
                                                           };
                                                           if(i === 4){i=0;}
                                                           return (<li className="leftTreeli" style={liStyle}>
                                                               <Link className="leftTreeLink" to={subList[key]}>{key}</Link>
                                                           </li>)
                                                       })
                                                   }
                                                    </ul>)
                                            })
                                        }
                                </li>
                            )
                        }
                    })
                }
            </ul>
        );
    }
}
export default LeftTree;