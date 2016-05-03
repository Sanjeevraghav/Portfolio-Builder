import React, {Component} from 'react';
import AboutMe from './AboutMe/aboutme.jsx';
import resume from './../Resume.json';
import Home from './Home/home.jsx';
import ProfessionalSummary from './ProfessionalSummary/ProfessionalSummary.jsx';
import Experience from './Experience/Experience.jsx';
import Education from './Education/Education.jsx';

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

export class ExperienceWrapper extends Component{
    render(){
        let {company} = this.props.params;
        return (
            <Experience about={resume.AboutMe} experience={resume.Experience[company]} />
        )
    }
}

export class EducationWrapper extends Component{
    render(){
        return (
            <Education about={resume.AboutMe} education={resume.Qualification} />
        )
    }
}