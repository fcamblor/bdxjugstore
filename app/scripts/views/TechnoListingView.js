define([
    "backbone", "underscore", "hbs!templates/TechnosListing", "hbs!templates/EditTechno", "models/TechnosListing", "models/Techno"
], function(Backbone, _, viewTemplate, editTechnoTemplate, TechnosListing, Techno){

    var TechnoListingViewClass = Backbone.View.extend({
        events: {
            "click .edit-btn": "editTechno"
        },

        initialize: function(){
            TechnoListingViewClass.__super__.initialize.apply(this, arguments);
            this.technos = new TechnosListing();
            this.editedTechno = null;
        },

        render: function(){
            var currentView = this;
            $.when(
                this.technos.fetch()
                //$.getJSON("/data/technos.json")
            ).then(function(technos){
                currentView.$el.html(viewTemplate({ technos: currentView.technos.toJSON() }));

                currentView.$el.find("li").each(function(idx, element){
                    $(element).data("techno", technos[idx]);
                });
            });

            return this;
        },

        editTechno: function(event){
            var targetLi = $(event.currentTarget).parent("li");
            var targetTechno = targetLi.data("techno");
            console.log("clicked on techno : "+targetTechno.title);

            var editForm = $(editTechnoTemplate(targetTechno));
            targetLi.replaceWith(editForm);

            var modelBinder = new Backbone.ModelBinder();
            this.editedTechno = new Techno(targetTechno);
            modelBinder.bind(this.editedTechno, editForm);

            // For debug purpose only...
            window.techno = this.editedTechno;
        }

    });

    return TechnoListingViewClass;
});