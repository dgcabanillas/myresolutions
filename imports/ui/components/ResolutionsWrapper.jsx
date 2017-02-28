import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {Meteor} from 'meteor/meteor';

import ResolutionsForm from './ResolutionsForm.jsx';
import ResolutionSingle from './ResolutionSingle.jsx';

import { Resolutions } from '../../../lib/database.js';

export default class ResolutionsWrapper extends TrackerReact(Component) {
	constructor(){
		super();

		this.state = {
			subscription: {
				resolutions: Meteor.subscribe("userResolutions")
			}
		}
	}
	componentWillUnmount() {
		this.state.subscription.resolutions.stop();
	}

	resolutions() {
		return Resolutions.find().fetch();
	}
	render() {
		return (
			<div>
				<h1>My resolutions - {Session.get('test')}</h1>
				<ResolutionsForm />
				<ul className="resolutions">
					{this.resolutions().map( (res)=>{
						return <ResolutionSingle key={res._id} resolution={res} />
					})}
				</ul>
			</div>	
		);
	}
}