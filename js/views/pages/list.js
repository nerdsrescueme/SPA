define([
	'jquery',
	'underscore',
	'backbone',
	'collections/pages',
	'text!templates/pages/list.html'
],
function($, _, Backbone, Pages, PageListTpl) {

	var PageListView = Backbone.View.extend({
		el: $('#stage'),
		initialize: function() {
			this.collection = Pages;
			this.collection.bind("add", this.exampleBind);
			this.collection = Pages.add({ name: "Twitter"});
			this.collection = Pages.add({ name: "Facebook"});
			this.collection = Pages.add({ name: "Myspace", score: 20});
		},
		exampleBind: function(model) {
			//console.log(model);
		},
		render: function() {
			var data = {
				pages: this.collection.models,
				_: _
			};
			var compiledTpl = _.template(PageListTpl, data);
			this.el.html(compiledTpl);
		}
	});
	return new PageListView;

});
