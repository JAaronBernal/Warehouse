const report = require('multiple-cucumber-html-reporter');

const startTime = new Date();
const endTime = new Date();

report.generate({
    jsonDir: "jsonlogs",
    reportPath: ".reports/cucumber-htmlreport.html",
    displayDuration: true,
    durationInMS: false,
    displayReportTime: true,
    metadata: {
        browser: {
            name: "chrome",
            version: "XX",
        },
        device: "Local test machine",
        platform: {
            name: "macOS",
            version: "Ventura 13.4.1",
        },
    },
    customData: {
        title: 'Run info',
        data: [
            { label: 'Project', value: 'Warehouse' },
            { label: 'Release', value: '1.0' },
            { label: 'Test', value: 'E2E' },
            { label: 'Execution Start Time', value: startTime.toLocaleString() },
            { label: 'Execution End Time', value: endTime.toLocaleString() }
        ]
    }
});
