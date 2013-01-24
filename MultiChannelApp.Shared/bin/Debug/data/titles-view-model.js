
(function() {
    MultiChannelApp.TitleViewModel = function(data) {
            this.Id = ko.observable();
            this.Name = ko.observable();
            this.ShortName = ko.observable();
            this.Synopsis = ko.observable();
            this.ShortSynopsis = ko.observable();
            this.AverageRating = ko.observable();
            this.ReleaseYear = ko.observable();
            this.Url = ko.observable();
            this.Runtime = ko.observable();
            this.Rating = ko.observable();
            this.DateModified = ko.observable();
            this.Type = ko.observable();
            this.WebsiteUrl = ko.observable();
            this.NetflixApiId = ko.observable();
            this.TinyUrl = ko.observable();
            this.BluRay = ko.observable();
            this.BoxArt = ko.observable();
            this.Dvd = ko.observable();
            this.Instant = ko.observable();
            this.imageSrc = ko.observable();
            if(data)
                this.fromJS(data);
    };

    $.extend(MultiChannelApp.TitleViewModel.prototype, {
        toJS: function() {
            return {
                Id: this.Id(),
                Name: this.Name(),
                ShortName: this.ShortName(),
                Synopsis: this.Synopsis(),
                ShortSynopsis: this.ShortSynopsis(),
                AverageRating: this.AverageRating(),
                ReleaseYear: this.ReleaseYear(),
                Url: this.Url(),
                Runtime: this.Runtime(),
                Rating: this.Rating(),
                DateModified: this.DateModified(),
                Type: this.Type(),
                WebsiteUrl: this.WebsiteUrl(),
                NetflixApiId: this.NetflixApiId(),
                TinyUrl: this.TinyUrl(),
                BluRay: this.BluRay(),
                BoxArt: this.BoxArt(),
                Dvd: this.Dvd(),
                Instant: this.Instant(),
            };
        },

        fromJS: function(data) {
            if(data) {
                this.Id(data.Id);
                this.Name(data.Name);
                this.ShortName(data.ShortName);
                this.Synopsis(data.Synopsis);
                this.ShortSynopsis(data.ShortSynopsis);
                this.AverageRating(data.AverageRating);
                this.ReleaseYear(data.ReleaseYear);
                this.Url(data.Url);
                this.Runtime(data.Runtime);
                this.Rating(data.Rating);
                this.DateModified(data.DateModified);
                this.Type(data.Type);
                this.WebsiteUrl(data.WebsiteUrl);
                this.NetflixApiId(data.NetflixApiId);
                this.TinyUrl(data.TinyUrl);
                this.BluRay(data.BluRay);
                this.BoxArt(data.BoxArt);
                this.Dvd(data.Dvd);
                this.Instant(data.Instant);
				this.imageSrc(data.__metadata.media_src);

            }
        }
    });
})();