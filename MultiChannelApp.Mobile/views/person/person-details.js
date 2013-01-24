
MultiChannelApp.PersonDetails = function(params) {

    var hidePopup = function() {
        var popup = $("#deleteConfirmation").data("dxPopup");
        popup.hide();
    };

    return {
        id: params.id,

        person: new MultiChannelApp.PersonViewModel(),

        handleDelete: function() {
            var overlay = $("#deleteConfirmation").data("dxPopup");
            overlay.show();
        },

        handleConfirmDelete: function() {
            MultiChannelApp.db.People.remove(params.id).done(function() {
                MultiChannelApp.app.navigate("People", { target: "blank" });
            }).fail(hidePopup);
        },

        handleCancelDelete: function() {
            hidePopup();
        },

        viewShown: function() {
            personDetails = this;
            MultiChannelApp.db.People.byKey(params.id).done(function(data) {
                personDetails.person.fromJS(data);
            });
        }
    };
};
