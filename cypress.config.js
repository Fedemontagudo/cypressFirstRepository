const { defineConfig } = require('cypress');

let href;
let value1;

module.exports = defineConfig({
    e2e: {
        experimentalSessionAndOrigin: true,
        setupNodeEvents(on, config) {
            on('task', {
                setHref: value => {
                    return (href = value);
                },
                getHref: () => {
                    return href;
                },
            }),
                on('task', {
                    setValue1: value => {
                        return (value1 = value);
                    },
                    getValue1: () => {
                        return value1;
                    },
                });
        },
    },
    pageLoadTimeout: 60000,
    defaultCommandTimeout: 90000,
    requestTimeout: 20000,
    responseTimeout: 20000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    retries: {
        runMode: 1,
        openMode: 1,
    },
    reporterOptions: {
        toConsole: true,
    },
});
