define([
    "backbone", "underscore", "hbs!templates/TechnoListing", "models/TechnoListing"
], function(Backbone, _, viewTemplate, TechnoListing){

    var TechnoListingClass = Backbone.View.extend({
        events: {
        },

        initialize: function(){
            TechnoListingClass.__super__.initialize.apply(this, arguments);

            this.technos = new TechnoListing();
        },

        render: function(){
            var currentView = this;

            $.when(
                currentView.technos.fetch()
            ).then(function(){
                currentView.$el.html(viewTemplate({technos: currentView.technos.toJSON()}));
            });

//            $.getJSON("/data/technos.json", function(technos){
//                currentView.$el.html(viewTemplate({technos: technos}));
//            });

            return this;
        }

    });

    return TechnoListingClass;
});