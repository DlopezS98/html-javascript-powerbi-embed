import environment from "./environment.mjs";

const config = {
    type: 'report',
    tokenType: environment.TOKEN_TYPE,
    accessToken: environment.ACCESS_TOKEN,
    embedUrl: environment.EMBED_URL,
    id: environment.REPORT_ID,
    permissions: environment.PERMISSIONS,
    settings: {
        panes: {
            filters: {
                visible: true
            },
            pageNavigation: {
                visible: true
            }
        },
        bars: {
            statusBar: {
                visible: true
            }
        }
    }
};

const embedContainer = document.getElementById('powerbi-report-container');
report = powerbi.embed(embedContainer, config);
// Embed the report and display it within the div container.

// report.off removes all event handlers for a specific event
report.off("loaded");

// report.on will add an event handler
report.on("loaded", function () {
    // loadedResolve();
    report.off("loaded");
});

// report.off removes all event handlers for a specific event
report.off("error");

report.on("error", function (event) {
    console.log(event.detail);
});

// report.off removes all event handlers for a specific event
report.off("rendered");

// report.on will add an event handler
report.on("rendered", function () {
    // renderedResolve();
    report.off("rendered");
});