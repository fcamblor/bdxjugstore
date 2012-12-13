define([
    "backbone", "underscore", "hbs!templates/Hello"
], function(Backbone, _, viewTemplate){

    var HelloViewClass = Backbone.View.extend({
        events: {
            "click .hello-btn": "helloClicked"
        },

        initialize: function(){
            HelloViewClass.__super__.initialize.apply(this, arguments);
        },

        render: function(){
            this.$el.html(viewTemplate({who: "fred"}));

            return this;
        },

        helloClicked: function(){
            console.log("hello tout le monde !");
        }

    });

    return HelloViewClass;
});