import React, {Component} from 'react';
import AboutMe from './AboutMe/aboutme.jsx';
import resume from './../Resume.json';
import Home from './Home/home.jsx';
import ProfessionalSummary from './ProfessionalSummary/ProfessionalSummary.jsx';

export class HomeWrapper extends Component{
    render(){
        return (
            <Home home={resume.AboutMe} />
        )
    }
}
export class AboutMeWrapper extends Component{
    render(){
        return (
            <AboutMe about={resume.AboutMe} />
        )
    }
}

export class ProfessionalSummaryWrapper extends Component{
    render(){
        return (
            <ProfessionalSummary about={resume.AboutMe} summary={resume.ProfessionalSummary} />
        )
    }
}