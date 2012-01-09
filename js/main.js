require.config({
	paths: {
		jquery: 'libs/jquery/jquery-min',
		underscore: 'libs/underscore/underscore-min',
		backbone: 'libs/backbone/backbone-optamd3-min',
		text: 'libs/require/text',
		templates: '../templates',
		ui: 'ui'
	},
	baseUrl: 'js'
});

require([ 'app' ], function(App) {
	App.initialize();
});
