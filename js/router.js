// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/main',
  'views/pages/list',
  'views/users/list'
], function($, _, Backbone, mainHomeView, pageListView, userListView ) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      '!/pages':    'pages',
      '!/page/:id': 'page',
      '!/users':    'users',

      // Default
      '*actions': 'index'
    },
    pages: function() {
      // Call render on the module we loaded in via the dependency array
      // 'views/projects/list'
      pageListView.render();
    },
      // As above, call render on our loaded module
      // 'views/users/list'
    users: function() {
      userListView.render();
    },
    index: function(actions){
      // We have no matching route, lets display the home page
      mainHomeView.render();
    }
  });

  var initialize = function() {
    var app_router = new AppRouter;
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
