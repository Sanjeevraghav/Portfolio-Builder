import React, {Component} from 'react'
import {render} from 'react-dom';
import {HomeWrapper, AboutMeWrapper, ProfessionalSummaryWrapper} from './ComponentWrapper.jsx';
import { Router, Route, Link, browserHistory  } from 'react-router';


render((<Router>
            <Route path="/" component={HomeWrapper} />
            <Route path="/aboutme" component={AboutMeWrapper} />
            <Route path="/summary" component={ProfessionalSummaryWrapper} />
    <Route path="*" component={HomeWrapper}/>
        </Router>), document.getElementById("app"));