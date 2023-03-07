# Warehouse

| ** Execute a individual Feature for TEST **|

	npm run cypress:runner 




| ** Execute a all Feature for TEST and Make a report **|
	
	npm run cypress:execution



| ** Cucumber HTM Report **|
	
	//Libs
	npm install multiple-cucumber-html-reporter --save-dev

	// Create a report in terminal
	node ./cucumber-html-report.js



| **Cucumber in cypress **|

	//Libs
	npm install @badeball/cypress-cucumber-preprocessor
	npm i -D cypress @bahmutov/cypress-esbuild-preprocessor esbuild

| ** Upload file in cypress **|
	
	//Libs
	npm install --save-dev cypress-file-upload


** start enviroment variable to make the reporte (MacOs)**|
source ~/.bash_profile



| **Tab is added /in cypress*|
	npm install -D cypress-plugin-tab

	add in support/e2e.js
	require("cypress-plugin-tab");
	
** xpath /in cypress
** npm install -D @cypress/xpath --force
add in support/e2e.js
require('@cypress/xpath');

**Cypress plugin iframes***
npm install -D cypress-iframe --force
cypress/support/commands.js
import 'cypress-iframe'
// or
require('cypress-iframe')

****Upgrade Cypress 
npm install -D cypress@12.6.0

****RecordKey
npx cypress run --record --key a76b06d5-97fb-43f6-9d4d-51ac0f06f1fe
	