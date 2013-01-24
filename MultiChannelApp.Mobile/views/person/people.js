
MultiChannelApp.People = function(params) {
    return {
        dataSource: {
            store: MultiChannelApp.db.People,
            map: function(item) {
                return new MultiChannelApp.PersonViewModel(item);
            }
        }
    };   
};
