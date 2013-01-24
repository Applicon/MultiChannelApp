
(function() {
    MultiChannelApp.PersonViewModel = function(data) {
            this.Id = ko.observable();
            this.Name = ko.observable();
            if(data)
                this.fromJS(data);
    };

    $.extend(MultiChannelApp.PersonViewModel.prototype, {
        toJS: function() {
            return {
                Id: this.Id(),
                Name: this.Name(),
            };
        },

        fromJS: function(data) {
            if(data) {
                this.Id(data.Id);
                this.Name(data.Name);

            }
        }
    });
})();