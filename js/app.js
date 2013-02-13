App = Ember.Application.create();

// Router
App.Router.map( function() {
	this.resource('one');
	this.resource('two');
	this.resource('three');
	this.resource('four');
});