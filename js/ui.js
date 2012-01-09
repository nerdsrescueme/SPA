define(['jquery', 'underscore', 'backbone' ], 
function($, _, Backbone) {
	var ui = {

		initialize: function() {
			ui.setup_selector();
		},

		selector: $('#selector'),
		setup_selector: function() {
			$('<div id="selectorToggle" />').appendTo(ui.selector);
		
			ui.selector.data('state', 'open').click(function(e) {
				if(ui.selector.data('state') == 'open') {
					return ui.selector.animate({width: '3.5em'}).data('state', 'closed');
				}
				return ui.selector.animate({width: '20%'}).data('state', 'open');
			});
		}
	}
	return ui;
});