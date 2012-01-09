define(['jquery', 'underscore', 'backbone', 'router', 'ui', ], 
function($, _, Backbone, Router, UI) {
	var initialize = function() {
		Router.initialize();
		UI.initialize();
	}
	return {
		initialize: initialize
	};
});