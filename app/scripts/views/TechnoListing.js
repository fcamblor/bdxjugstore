define([
    "backbone", "underscore", "hbs!templates/TechnoListing", "hbs!templates/EditTechno", "models/TechnoListing", "models/Techno"
], function(Backbone, _, viewTemplate, editTechnoTpl, TechnoListing, Techno){

    var TechnoListingClass = Backbone.View.extend({
        events: {
            "click .edit-btn": "technoEdited"
        },

        initialize: function(){
            TechnoListingClass.__super__.initialize.apply(this, arguments);

            this.technos = new TechnoListing();
            this.editedTechno = null;
        },

        render: function(){
            var currentView = this;

            $.when(
                currentView.technos.fetch()
            ).then(function(){
                    var technos = currentView.technos.toJSON();
                    currentView.$el.html(viewTemplate({technos: technos}));

                currentView.$el.find("li").each(function(idx){
                    $(this).data("techno", technos[idx]);
                });
            });

//            $.getJSON("/data/technos.json", function(technos){
//                currentView.$el.html(viewTemplate({technos: technos}));
//            });

            return this;
        },

        technoEdited: function(event){
            var listItem = $(event.currentTarget).parent("li");
            var targetTechno = listItem.data("techno");
            console.log("Techno edited : "+targetTechno.title);

            var editForm = $(editTechnoTpl(targetTechno));
            listItem.replaceWith(editForm);

            var modelBinder = new Backbone.ModelBinder();
            this.editedTechno = new Techno(targetTechno);
            modelBinder.bind(this.editedTechno, editForm);

            // For debug purpose only !
            window.techno = this.editedTechno;
        }

    });

    return TechnoListingClass;
});