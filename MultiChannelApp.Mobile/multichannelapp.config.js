
// NOTE object below must be a valid JSON
window.MultiChannelApp = $.extend(true, window.MultiChannelApp, {
    "config": {
        "defaultLayout": "navbar",
        "navigation": [
            {
                title: "Genres",
                action: "#Genres",
                icon: "genre"
            },
            {
                title: "Titles",
                action: "#Titles",
                icon: "title"
            },
            {
                title: "People",
                action: "#People",
                icon: "person"
            },
            {
                title: "About",
                action: "#About",
                icon: "info"
            }
        ]
    }
});
