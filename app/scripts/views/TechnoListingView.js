define([
    "backbone", "underscore", "hbs!templates/TechnosListing", "models/TechnosListing"
], function(Backbone, _, viewTemplate, TechnosListing){

    var TechnoListingViewClass = Backbone.View.extend({
        events: {
        },

        initialize: function(){
            TechnoListingViewClass.__super__.initialize.apply(this, arguments);
            this.technos = new TechnosListing();
        },

        render: function(){
            var currentView = this;
            $.when(
                this.technos.fetch()
                //$.getJSON("/data/technos.json")
            ).then(function(technos){
                currentView.$el.html(viewTemplate({ technos: currentView.technos.toJSON() }));
            });

            return this;
        }

    });

    return TechnoListingViewClass;
});