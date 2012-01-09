define([
	'jquery', 
	'underscore', 
	'backbone', 
	'models/pages',
],
function($, _, Backbone, Page){

	var Pages = Backbone.Collection.extend({
		model: Page,
	});

	return new Pages;
});
