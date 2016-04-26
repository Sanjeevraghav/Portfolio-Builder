import React, {Component} from 'react'
import {render} from 'react-dom';
import AboutMe from './AboutMe/aboutme.jsx';
import Home from './Home/home.jsx';
import resume from './../Resume.json';

render(<Home home={resume.Home}/>, document.getElementById("app"));