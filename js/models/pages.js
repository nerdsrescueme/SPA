define([
	'underscore', 
	'backbone'
], 
function(_, Backbone) {

	var PageModel = Backbone.Model.extend({
		defaults: {
			title: 'Untitled Page',
			published: false,
			score: 10
		},
		initialize: function() {}
	});
	return PageModel;


});
