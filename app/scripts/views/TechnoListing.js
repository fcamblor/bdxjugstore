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
            $.getJSON("/data/technos.json", function(technos){
                currentView.$el.html(viewTemplate({technos: technos}));
            });

            return this;
        }

    });

    return TechnoListingClass;
});