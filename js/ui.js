define(['jquery', 'underscore', 'backbone' ], 
function($, _, Backbone) {
	var ui = {

		initialize: function() {
			ui.init_selector();
			ui.init_toolbar();
		},

		selector: {
			obj:     $('#selector'),
			is_open: true,
			width: {
				open: '18em',
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
		},
		toolbar: {
			obj: $('#toolbar'),
			is_open: false,
			height: {
				open: '18em',
				closed: '3.5em'
			},
			toggle: null
		},
		init_toolbar: function() {
			ui.toolbar.obj.prepend('<div id="toolbarToggle"></div>');
			
			ui.toolbar.toggle = $('#toolbarToggle')
			.click(function(e) {
				if(ui.toolbar.is_open) {
					ui.toolbar.is_open = false;
					return ui.toolbar.obj.animate({height: ui.toolbar.height.closed});
				}
				ui.toolbar.is_open = true;
				return ui.toolbar.obj.animate({height: ui.toolbar.height.open});
			});
		}
	}
	return ui;
});