define([
    "backbone", "underscore", "hbs!templates/TechnoListing"
], function(Backbone, _, viewTemplate){

    var TechnoListingClass = Backbone.View.extend({
        events: {
        },

        initialize: function(){
            TechnoListingClass.__super__.initialize.apply(this, arguments);
        },

        render: function(){
            var currentView = this;

            $.when(
                $.getJSON("/data/technos.json"),
                $.getJSON("/data/technos.json"),
                $.getJSON("/data/technos.json")
            ).then(function(technos, technos2, technos3){
                currentView.$el.html(viewTemplate({technos: technos}));
            });

//            $.getJSON("/data/technos.json", function(technos){
//                currentView.$el.html(viewTemplate({technos: technos}));
//            });

            return this;
        }

    });

    return TechnoListingClass;
});