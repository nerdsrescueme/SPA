define(['jquery', 'underscore', 'backbone' ], 
function($, _, Backbone) {
	var ui = {

		initialize: function() {
			ui.init_selector();
		},

		selector: {
			obj:     $('#selector'),
			is_open: true,
			width: {
				open: '20%',
				closed: '3.5em'
			}
		},
		init_selector: function() {
			ui.selector.obj.append('<div id="selectorToggle"></div>')
			.click(function(e) {
				if(ui.selector.is_open) {
					ui.selector.is_open = false;
					return ui.selector.obj.animate({width: ui.selector.width.closed});
				}
				ui.selector.is_open = true;
				return ui.selector.obj.animate({width: ui.selector.width.open});
			});
		}
	}
	return ui;
});