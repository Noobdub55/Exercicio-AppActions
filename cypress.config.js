const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "y8cgnm",

  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "reports",
    overwrite: false,
    html: true,
    json: false
  },

  e2e: {
    baseUrl:'http://lojaebac.ebaconline.art.br/',
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});