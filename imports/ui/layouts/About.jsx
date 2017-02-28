import React, { Component } from 'react';

export default class About extends Component {
	setVar() {
		Session.set('Meteor.loginButtons.dropdownVisible',true);
	}

	render() {
		return (
			<div>
				<h1>About Us</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero neque deserunt molestiae a praesentium eum dicta ducimus, quibusdam ipsa, odit nobis labore sunt eaque optio similique! Voluptas explicabo sit tenetur culpa quis nemo ipsam, commodi iusto. Possimus quaerat, repudiandae delectus commodi distinctio natus ratione dolore temporibus ex debitis hic enim.</p>
				<button onClick={this.setVar}>Click me</button>
			</div>
		);
	}
}