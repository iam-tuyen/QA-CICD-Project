const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true, // Bật biểu đồ
    reportPageTitle: 'Báo Cáo Test Login',
    embeddedScreenshots: true,
    inlineAssets: true // Lệnh phép thuật: Ép gom hết biểu đồ vào 1 file HTML duy nhất
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});