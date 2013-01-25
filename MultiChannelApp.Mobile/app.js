
$(function() {
    
    MultiChannelApp.app = new DevExpress.framework.html.HtmlApplication({
        ns: MultiChannelApp,
        viewPortNode: document.getElementById("viewPort"),
        defaultLayout: MultiChannelApp.config.defaultLayout,
        navigation: MultiChannelApp.config.navigation
    });

    MultiChannelApp.app.router.register(":view/:id", { view: "Genres", id: undefined });
    MultiChannelApp.app.router.register(":view/:id", { view: "Titles", id: undefined });
    MultiChannelApp.app.router.register(":view/:id", { view: "People", id: undefined });
    MultiChannelApp.app.router.register(":view/:id", { view: "About", id: undefined });
});

// annað comment
