define(['underscore', 'backbone'], function(_, Backbone) {
	var pagesModel = Backbone.Model.extend({
		defaults: {
			title: 'Untitled',
			score: 10
		},
		initialize: function() {}
	});
	return pagesModel;
});
