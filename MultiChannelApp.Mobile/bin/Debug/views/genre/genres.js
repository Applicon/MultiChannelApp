
MultiChannelApp.Genres = function(params) {
    return {
        dataSource: {
            store: MultiChannelApp.db.Genres,
            map: function(item) {
                return new MultiChannelApp.GenreViewModel(item);
            }
        }
    };   
};
