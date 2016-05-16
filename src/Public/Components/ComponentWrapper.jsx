import React, {Component} from 'react';
import AboutMe from './AboutMe/aboutme.jsx';
import resume from './../Resume.json';
import Home from './Home/home.jsx';
import ProfessionalSummary from './ProfessionalSummary/ProfessionalSummary.jsx';
import Experience from './Experience/Experience.jsx';
import Education from './Education/Education.jsx';
import LeftTree from './LeftTree/LeftTree.jsx';
import Projects from './Projects/Projects.jsx';
import Skills from './Skills/Skills.jsx';
import Publications from './Publications/Publications.jsx';
import ContactDetails from './ContactDetails/ContactDetails.jsx';

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

export class ProjectsWrapper extends Component{
    render(){
        let {index} = this.props.params;
        return (
            <Projects about={resume.AboutMe} project = {resume.Projects[index]} />
        )
    }
}

export class SkillsWrapper extends Component{
    render(){
        return (
            <Skills about={resume.AboutMe} skills = {resume.TechnicalSkillSet} />
        )
    }
}

export class PublicationWrapper extends Component{
    render(){
        return (
            <Publications about={resume.AboutMe} publication = {resume.JournalsPublications} />
        )
    }
}

export class ContactDetailsWrapper extends Component{
    render(){
        return (
            <ContactDetails about={resume.AboutMe} contact = {resume.ContactDetails} />
        )
    }
}

export class LeftTreeWrapper extends Component{
    render(){
        return (
            <LeftTree leftTreeDataSource = {resume.LeftTree} />
        )
    }
}

