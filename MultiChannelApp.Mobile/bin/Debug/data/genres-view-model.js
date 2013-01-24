
(function() {
    MultiChannelApp.GenreViewModel = function(data) {
            this.Name = ko.observable();
            if(data)
                this.fromJS(data);
    };

    $.extend(MultiChannelApp.GenreViewModel.prototype, {
        toJS: function() {
            return {
                Name: this.Name(),
            };
        },

        fromJS: function(data) {
            if(data) {
                this.Name(data.Name);

            }
        }
    });
})();