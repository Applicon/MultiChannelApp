
MultiChannelApp.GenreEdit = function(params) {

    return {
        genre: new MultiChannelApp.GenreViewModel(),

        handleSave: function() {
            if(params.id !== undefined)
                this.update();            
            else
                this.insert();
        },

        load: function() {
            var self = this;
            MultiChannelApp.db.Genres.byKey(params.id).done(function(data) {
                self.genre.fromJS(data);
            });
        },

        update: function(){
            MultiChannelApp.db.Genres.update(params.id, this.genre.toJS()).done(function() {
                MultiChannelApp.app.navigate("GenreDetails/" + params.id);
            });
        },

        insert: function() {
            MultiChannelApp.db.Genres.insert(this.genre.toJS()).done(function() {
                MultiChannelApp.app.navigate("Genres");
            });
        },

        viewShown: function() {
             if(params.id !== undefined)
                this.load();
         }
    };        
};
