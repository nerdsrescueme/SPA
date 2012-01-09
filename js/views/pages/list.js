// Filename: views/projects/list
define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above
  'collections/pages',
  'text!templates/pages/list.html'

], function($, _, Backbone, pagesCollection, pageListTemplate){
  var pageListView = Backbone.View.extend({
    el: $("#page"),
    initialize: function(){
      this.collection = pagesCollection;
      this.collection.bind("add", this.exampleBind);
      this.collection = pagesCollection.add({ name: "Twitter"});
      this.collection = pagesCollection.add({ name: "Facebook"});
      this.collection = pagesCollection.add({ name: "Myspace", score: 20});
    },
    exampleBind: function( model ){
      //console.log(model);
    },
    render: function(){
      var data = {
        pages: this.collection.models,
        _: _
      };
      var compiledTemplate = _.template( pageListTemplate, data );
      $("#page").html( compiledTemplate );
    }
  });
  return new pageListView;
});
