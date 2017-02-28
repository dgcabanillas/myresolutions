import { Meteor } from 'meteor/meteor';

import { Resolutions } from './database.js';

if(Meteor.isServer){
	Meteor.publish("allResolutions", function(){
		return Resolutions.find();
	});

	Meteor.publish("userResolutions", function(){
		return Resolutions.find({user: this.userId});
	});
}

Meteor.methods({
  	addResolution(resolution) {
  		check(resolution, String);
  		if(!Meteor.userId()){
  			throw new Meteor.Error('mot-authorized');
  		}
  		Resolutions.insert({
      		'text': resolution,
      		'complete': false,
      		'createdAt': new Date(),
      		'user': Meteor.userId()
    	});
  	},

  	toggleResolution(resolution) {
  		check(resolution, Object);
  		if(Meteor.userId() !== resolution.user){
  			throw new Meteor.Error('mot-authorized');
  		}
		Resolutions.update(resolution._id,{
			$set: {complete: !resolution.complete}
		});
  	},

  	deleteResolution(resolution) {
  		check(resolution, Object);
  		if(Meteor.userId() !== resolution.user){
  			throw new Meteor.Error('mot-authorized');
  		}
		Resolutions.remove(resolution._id);
  	}
});


