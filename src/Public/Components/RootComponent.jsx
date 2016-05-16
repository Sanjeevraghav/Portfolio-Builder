import React, {Component} from 'react'
import {render} from 'react-dom';
import {HomeWrapper, AboutMeWrapper, ProfessionalSummaryWrapper, ContactDetailsWrapper, ExperienceWrapper, LeftTreeWrapper, ProjectsWrapper, PublicationWrapper, SkillsWrapper} from './ComponentWrapper.jsx';
import {EducationWrapper} from './ComponentWrapper.jsx';
import { Router, Route, Link, browserHistory, hashHistory  } from 'react-router';

render((<Router history={hashHistory}>
    <Route path="*" component={LeftTreeWrapper}/>
</Router>), document.getElementById("leftmenu"));


render((<Router history={hashHistory}>
    <Route path="/" component={HomeWrapper}/>
    <Route path="/aboutme" component={AboutMeWrapper}/>
    <Route path="/summary" component={ProfessionalSummaryWrapper}/>
    <Route path="/experience/:company" component={ExperienceWrapper}/>
    <Route path="/education" component={EducationWrapper}/>
    <Route path="/projects/:index" component={ProjectsWrapper}/>
    <Route path="/skills" component={SkillsWrapper}/>
    <Route path="/publications" component={PublicationWrapper}/>
    <Route path="/contact" component={ContactDetailsWrapper}/>
    <Route path="*" component={HomeWrapper}/>
</Router>), document.getElementById("app"));