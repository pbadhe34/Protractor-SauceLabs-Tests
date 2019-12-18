 

exports.config = {
 
   
// sauceSeleniumAddress: 'localhost:4445/wd/hub',

  'tunnelIdentifier': 'sc-proxy-tunnel',

//Using SauceLabs selenium server at //https://ondemand.saucelabs.com:443/wd/hub

  //Get the access key from saucealab login page
     sauceUser: 'pbadhe34',
	sauceKey: 'c869f49f-95ff-42a0-b5b4-99712d1baeb4',
	sauceRegion: 'us',

  capabilities: {
    'browserName': 'chrome'
  },

//Launch the browser without selenium server
   
   //directConnect: true,   //only for FF and Chrome browsers


  //Specify the name of the specs files.

   specs: ['protractor-test-scenario.js'],

   // Framework to use. Jasmine 2 is recommended.
  framework: 'jasmine2',


  //Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
      onComplete: null,
      isVerbose: true,
      showColors: true,
      includeStackTrace: true,
      defaultTimeoutInterval: 50000
  }
};

 