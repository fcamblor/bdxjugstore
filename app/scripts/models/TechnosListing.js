define(["backbone", "underscore", "models/Techno"], function(Backbone, _, modelType){
    var TechnosListingClass = Backbone.Collection.extend({
        model: modelType,
        defaults: {
        },
        url: "/data/technos.json",

        initialize: function(properties, classProperties){
            TechnosListingClass.__super__.initialize.call(this,properties, classProperties);
        }

        // Aliases
    });

    return TechnosListingClass;
});