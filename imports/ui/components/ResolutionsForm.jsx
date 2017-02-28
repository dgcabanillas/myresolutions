import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

export default class ResolutionsForm extends Component{
	addResolution(event) {
		event.preventDefault();
		const text = ReactDOM.findDOMNode(this.refs.resolution).value.trim();
		if(text){
			Meteor.call('addResolution',text, (error,data)=>{
				if(error) {
					Bert.alert('Please login before submitting','danger','fixed-top','fa-frown-o');
				}else{
				 	ReactDOM.findDOMNode(this.refs.resolution).value = '';
				}
			});
		}else{
			Bert.alert('Put something please!','info','fixed-top','fa-info');
		}
	}

	render() {
		return (
			<form action="" className="new-resolution" onSubmit={this.addResolution.bind(this)}>
				<input 
					type="text" 
					ref="resolution" 
					placeholder="Finish React Meteor Series"
				/>
			</form>
		);
	}
}