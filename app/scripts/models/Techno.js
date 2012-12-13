define(["backbone", "underscore"], function(Backbone, _){
    var TechnoClass = Backbone.Model.extend({
        defaults: {
            type: null,
            title: "woohoo",
            description: null
        },

        initialize: function(attributes, options){
            TechnoClass.__super__.initialize.call(this,attributes, options);
        }

        // Aliases
    });

    return TechnoClass;
});