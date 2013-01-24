
MultiChannelApp.PersonEdit = function(params) {

    return {
        person: new MultiChannelApp.PersonViewModel(),

        handleSave: function() {
            if(params.id !== undefined)
                this.update();            
            else
                this.insert();
        },

        load: function() {
            var self = this;
            MultiChannelApp.db.People.byKey(params.id).done(function(data) {
                self.person.fromJS(data);
            });
        },

        update: function(){
            MultiChannelApp.db.People.update(params.id, this.person.toJS()).done(function() {
                MultiChannelApp.app.navigate("PersonDetails/" + params.id);
            });
        },

        insert: function() {
            MultiChannelApp.db.People.insert(this.person.toJS()).done(function() {
                MultiChannelApp.app.navigate("People");
            });
        },

        viewShown: function() {
             if(params.id !== undefined)
                this.load();
         }
    };        
};
