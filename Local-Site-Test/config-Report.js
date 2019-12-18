 


var HtmlReporter = require('protractor-html-screenshot-reporter');

var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

var jasmineReporters = require('jasmine-reporters');

exports.config = {
 
  //The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',

 //Get the access key from saucealab login page
     sauceUser: 'pbadhe34',
	sauceKey: 'c869f49f-95ff-42a0-b5b4-99712d1baeb4',
	sauceRegion: 'us',


  
  //Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  

    
 

  directConnect: true,   //only for FF and Chrome

  //Specify the name of the specs files.

   specs: ['protractor-test-scenario.js'],

   // Framework to use. Jasmine 2 is recommended.
  framework: 'jasmine2',


  //Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
      onComplete: null,
      isVerbose: true,
      showColors: true,
      includeStackTrace: true
  },

onPrepare: function() {
       /*
        jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: "html-screenshots"
      })
     );
      */
     
     jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'html-report/',
          screenshotsFolder: 'images',
          fixedScreenshotName: true,
          filePrefix: 'index',
          takeScreenshots: true 
 //When enabled, reporter create screenshots for specs.
        })
     );

jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: 'testresults',
        filePrefix: 'xmloutput'
    }));

   }

};

 