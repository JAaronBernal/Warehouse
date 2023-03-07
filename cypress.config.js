const { defineConfig } = require("cypress");

const createBlunder = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = 
require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin
const createEsbuildPlugin = 
require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin



module.exports = defineConfig({
  projectId: 'kdxdax',
  e2e: {

    // sepupNodeEvents: Sustituye el folder de plugins 
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      const bulder = createBlunder({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bulder);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },

    // ruta donde tenemos los archivos features 
    //specPattern: "cypress/Ruta99/e2e/features/*.feature",
    specPattern: "cypress/Selfservices/e2e/features/*.feature",
    // Pagina por default
    viewportWidth: 1400,
    viewportHeight: 900,
    chromeWebSecurity: false,
    //Tiempo en lo que espara para cargar la pagina
    pageLoadTimeout: 25000,
    //Tiempo de espera en respuesta de cada acción,
    //ruta99 lo utilza a 300000 para su optimización
    //defaultCommandTimeout: 300000,
    defaultCommandTimeout: 10000,
  },
});
