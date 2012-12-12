define(["jquery", "backbone", "underscore", "views/HelloView", "views/TechnoListingView"], function($, Backbone, _, HelloView, TechnoListingView){

    var MainRouterClass = Backbone.Router.extend({
        routes: {
            "!/hello": "helloCalled",
            "!/technos": "viewTechnos"
        },

        initialize: function () {
            MainRouterClass.__super__.initialize.call(this);
            // Starting urls handlings
            // See http://backbonejs.org/#Router
            Backbone.history.start();
        },

        helloCalled: function(){
            console.log("hello has been called !");
            var helloView = new HelloView();
            helloView.setElement($("#container"));
            helloView.render();
        },

        viewTechnos: function(){
            console.log("technos has been called !");
            var technosView = new TechnoListingView();
            technosView.setElement($("#container"));
            technosView.render();
        }

    });

    return MainRouterClass;
});