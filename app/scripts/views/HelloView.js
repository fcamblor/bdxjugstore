define([
    "backbone", "underscore", "hbs!templates/Hello"
], function(Backbone, _, viewTemplate){

    var HelloViewClass = Backbone.View.extend({
        events: {
        },

        initialize: function(){
            HelloViewClass.__super__.initialize.apply(this, arguments);
        },

        render: function(){
            this.$el.html(viewTemplate({who: "fred"}));

            return this;
        }

    });

    return HelloViewClass;
});