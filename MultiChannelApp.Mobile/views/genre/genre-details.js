
MultiChannelApp.GenreDetails = function(params) {

    var hidePopup = function() {
        var popup = $("#deleteConfirmation").data("dxPopup");
        popup.hide();
    };

    return {
        id: params.id,

        genre: new MultiChannelApp.GenreViewModel(),

        handleDelete: function() {
            var overlay = $("#deleteConfirmation").data("dxPopup");
            overlay.show();
        },

        handleConfirmDelete: function() {
            MultiChannelApp.db.Genres.remove(params.id).done(function() {
                MultiChannelApp.app.navigate("Genres", { target: "blank" });
            }).fail(hidePopup);
        },

        handleCancelDelete: function() {
            hidePopup();
        },

        viewShown: function() {
            genreDetails = this;
            MultiChannelApp.db.Genres.byKey(params.id).done(function(data) {
                genreDetails.genre.fromJS(data);
            });
        }
    };
};
