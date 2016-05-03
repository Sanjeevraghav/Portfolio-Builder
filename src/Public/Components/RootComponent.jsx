import React, {Component} from 'react'
import {render} from 'react-dom';
import {HomeWrapper, AboutMeWrapper, ProfessionalSummaryWrapper, ExperienceWrapper} from './ComponentWrapper.jsx';
import {EducationWrapper} from './ComponentWrapper.jsx';
import { Router, Route, Link, browserHistory  } from 'react-router';


render((<Router>
    <Route path="/" component={HomeWrapper}/>
    <Route path="/aboutme" component={AboutMeWrapper}/>
    <Route path="/summary" component={ProfessionalSummaryWrapper}/>
    <Route path="/experience/:company" component={ExperienceWrapper}/>
    <Route path="/education" component={EducationWrapper}/>
    <Route path="*" component={HomeWrapper}/>
</Router>), document.getElementById("app"));