
window.fcamblor = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function() {
    console.log('Hello from Backbone!');
  }
};

requirejs.config({
    baseUrl: "scripts",
    paths: {
        "backbone": "../components/backbone/backbone",
        "backbone.modelbinder": "../components/Backbone.ModelBinder/Backbone.ModelBinder",
        "jquery": "../components/jquery/jquery",
        "underscore": "../components/underscore/underscore",
        "json2": "../components/require-handlebars-plugin/hbs/json2",
        "handlebars": "../components/require-handlebars-plugin/Handlebars",
        "i18nprecompile": "../components/require-handlebars-plugin/hbs/i18nprecompile",
        "hbs": "../components/require-handlebars-plugin/hbs"
    },
    shim: {
        // "default" backbone.js files are not AMD-compatible
        // => We must not consider it as proper backbone dependency, this is why we add here
        // shim config which provide window.Backbone as module dependency
        "backbone": {
            deps: ["underscore", "jquery"],
            // Note : This is strange that exports:"Backbone" is not enough
            // for strange reasons, we have to confirm it with init function
            // because otherwise, window.Backbone won't be provided as module dependency
            exports: "Backbone"
        },
        "underscore": {
            deps: [],
            exports: "_"
        }
    },
    // hbs particular configuration properties
    hbs: {
        disableI18n: true // Support for i18n is useless for the moment...
    }
});

require(["hbs"], function(){
    require(["backbone", "jquery", "underscore", "hbs!templates/Hello",
        "routes/MainRouter", "backbone.modelbinder"
    ], function(Backbone, $, _, helloTpl, MainRouter){
        console.log(helloTpl({who: "fred"}));

        $(document).ready(function(){
          fcamblor.init();
        });

        window.router = new MainRouter();
    });
});
