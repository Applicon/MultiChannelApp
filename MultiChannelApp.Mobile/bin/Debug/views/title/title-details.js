
MultiChannelApp.TitleDetails = function(params) {

    var hidePopup = function() {
        var popup = $("#deleteConfirmation").data("dxPopup");
        popup.hide();
    };

    return {
        id: params.id,

        title: new MultiChannelApp.TitleViewModel(),

        handleDelete: function() {
            var overlay = $("#deleteConfirmation").data("dxPopup");
            overlay.show();
        },

        handleConfirmDelete: function() {
            MultiChannelApp.db.Titles.remove(params.id).done(function() {
                MultiChannelApp.app.navigate("Titles", { target: "blank" });
            }).fail(hidePopup);
        },

        handleCancelDelete: function() {
            hidePopup();
        },

        viewShown: function() {
            titleDetails = this;
            MultiChannelApp.db.Titles.byKey(params.id).done(function(data) {
                titleDetails.title.fromJS(data);
            });
        }
    };
};
