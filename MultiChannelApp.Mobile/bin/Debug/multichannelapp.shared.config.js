
// NOTE object below must be a valid JSON
window.MultiChannelApp = $.extend(true, window.MultiChannelApp, {
    "config": {
        "endpoints": {
            "db": {
                "local": "http://odata.netflix.com/Catalog/",
                "production": "http://odata.netflix.com/Catalog/"
            }
        },
        "services": {
            "db": {
                "entities": {
					"Genres": { 
						key: "Name", 
						keyType: "String" 
					},
					"Titles": { 
						key: "Id", 
						keyType: "String" 
					},
					"People": { 
						key: "Id", 
						keyType: "Int32" 
					},
                }
            }
        }
    }
});
