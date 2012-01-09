define([
  'jquery',
  'underscore',
  'backbone',
  'models/pages'
], function($, _, Backbone, pageModel){
  var pagesCollection = Backbone.Collection.extend({
    model: pageModel,
    initialize: function(){

    }

  });

  return new pagesCollection;
});
