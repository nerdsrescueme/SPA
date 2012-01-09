define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/users/list.html'
],
function($, _, Backbone, UserListTpl){

	var UserListView = Backbone.View.extend({
		el: $('#page'),
		initialize: function() {},
		render: function() {
			var data        = {};
			var compiledTpl = _.template(UserListTpl, data);
			this.el.html(compiledTpl);
		}
	});
	return new UserListView;

});
