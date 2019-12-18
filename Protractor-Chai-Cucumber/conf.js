// conf.js
exports.config = {
  //sauceUser: process.env.SAUCE_USERNAME,
 // sauceKey: process.env.SAUCE_ACCESS_KEY,



     sauceUser: 'pbadhe34',
	sauceKey: 'c869f49f-95ff-42a0-b5b4-99712d1baeb4',

	sauceRegion: 'us',


  //seleniumAddress: 'http://ondemand.saucelabs.com:80/wd/hub',

  framework: 'custom',

  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: [
    'features/*.feature'
  ],  
  

  // restartBrowserBetweenTests: true,

  onPrepare: function(){
      var caps = browser.getCapabilities()
  },

  multiCapabilities: [{
    browserName: 'firefox',
    version: '59.0',
    platform: 'macOS 10.12',
    name: "firefox-tests",
    shardTestFiles: true,
    maxInstances: 25
  },{
    browserName: 'internet explorer',
    version: '11',
    platform: 'Windows 10',
    name: "ie-tests",
    shardTestFiles: true,
    maxInstances: 25
  }, {
    browserName: 'chrome',
    version: '67.0',
    platform: 'Windows 10',
    name: "chrome-tests",
    shardTestFiles: true,
    maxInstances: 25
  }],

  resultJsonOutputFile: 'report.json',  

 

onPrepare: function () {
       
        browser.ignoreSynchronization = true;
      // browser. waitForAngularEnabled(false)

       browser.getCapabilities().then(function(caps){  
       console.log("Inside conf prepare : the test running in  "+caps.get('browserName')); 
    });         

    },

  
  
  cucumberOpts: {
    require: 'features/steps/*_steps.js',
    format: 'pretty'
  },

  onComplete: function() {

    var printSessionId = function(jobName){
      browser.getSession().then(function(session) {
        console.log('SauceOnDemandSessionID=' + session.getId() + ' job-name=' + jobName);
      });
    }
    printSessionId("Test Job");
  }
}
