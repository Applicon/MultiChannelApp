
MultiChannelApp.TitleEdit = function(params) {

    return {
        title: new MultiChannelApp.TitleViewModel(),

        handleSave: function() {
            if(params.id !== undefined)
                this.update();            
            else
                this.insert();
        },

        load: function() {
            var self = this;
            MultiChannelApp.db.Titles.byKey(params.id).done(function(data) {
                self.title.fromJS(data);
            });
        },

        update: function(){
            MultiChannelApp.db.Titles.update(params.id, this.title.toJS()).done(function() {
                MultiChannelApp.app.navigate("TitleDetails/" + params.id);
            });
        },

        insert: function() {
            MultiChannelApp.db.Titles.insert(this.title.toJS()).done(function() {
                MultiChannelApp.app.navigate("Titles");
            });
        },

        viewShown: function() {
             if(params.id !== undefined)
                this.load();
         }
    };        
};
