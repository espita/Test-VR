const {
  defineConfig
} = require("cypress");

module.exports = defineConfig({
  viewportWidth: 800,
  viewportHeight: 1200,
  screenshots: {
    folder: 'cypress/screenshots',
    screenshotOnRunFailure: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.vr.com.br"
  }
});