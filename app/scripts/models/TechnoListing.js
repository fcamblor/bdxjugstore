define(["backbone", "underscore", "models/Techno"], function(Backbone, _, modelType){
    var TechnoListingClass = Backbone.Collection.extend({
        model: modelType,
        defaults: {
        },
        url: "/data/technos.json",

        initialize: function(properties, classProperties){
            TechnoListingClass.__super__.initialize.call(this,properties, classProperties);
        }

        // Aliases
    });

    return TechnoListingClass;
});