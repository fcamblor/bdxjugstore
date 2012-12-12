define(["jquery", "backbone", "underscore"], function($, Backbone, _){

    var MainRouterClass = Backbone.Router.extend({
        routes: {
            "!/hello": "helloCalled"
        },

        initialize: function () {
            MainRouterClass.__super__.initialize.call(this);
            // Starting urls handlings
            // See http://backbonejs.org/#Router
            Backbone.history.start();
        },

        helloCalled: function(){
            console.log("hello has been called !");
        }

    });

    return MainRouterClass;
});