define([
    "backbone", "underscore", "hbs!templates/TechnosListing"
], function(Backbone, _, viewTemplate){

    var TechnoListingViewClass = Backbone.View.extend({
        events: {
        },

        initialize: function(){
            TechnoListingViewClass.__super__.initialize.apply(this, arguments);
        },

        render: function(){
            var currentView = this;
            $.when(
                $.getJSON("/data/technos.json")
            ).then(function(technos, technos2){
                currentView.$el.html(viewTemplate({ technos: technos }));
            });

            return this;
        }

    });

    return TechnoListingViewClass;
});