const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    specPattern: "cypress/e2e/**/*.cy.js",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    }
  },

  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Login Test Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false
  },

  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",
  video: true,
  trashAssetsBeforeRuns: true
});