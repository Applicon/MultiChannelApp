
(function() {
    var endpointSelector = new DevExpress.EndpointSelector(MultiChannelApp.config.endpoints);

    var serviceConfig = $.extend(true, {}, MultiChannelApp.config.services, {
        db: {
            url: endpointSelector.urlFor("db"),
			// To enable JSONP support, uncomment the following line
            jsonp: !window.WinJS,

            errorHandler: handleServiceError
        }
    });

    //asdf
    // nýtt comment
    function handleServiceError(error) {
        if(window.WinJS) {
            try {
                new Windows.UI.Popups.MessageDialog(error.message).showAsync();
            } catch(e) {
                // Another dialog is shown
            }
        } else {
            alert(error.message);
        }
    }

    // Enable partial CORS support for IE < 10
    if($.browser.msie)
        $.support.cors = true;
    
    MultiChannelApp.db = new DevExpress.data.ODataContext(serviceConfig.db);

}());
