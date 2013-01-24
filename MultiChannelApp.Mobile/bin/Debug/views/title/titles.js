
MultiChannelApp.Titles = function(params) {
    return {
        dataSource: {
            store: MultiChannelApp.db.Titles,
            map: function(item) {
                return new MultiChannelApp.TitleViewModel(item);
            }
        }
    };   
};
