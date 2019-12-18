exports.config = {
    //sauceUser: process.env.SAUCE_USERNAME,
   // sauceKey: process.env.SAUCE_ACCESS_KEY,
    

   //Get the access key from saucealab login page
     sauceUser: 'pbadhe34',
	sauceKey: 'c869f49f-95ff-42a0-b5b4-99712d1baeb4',

	sauceRegion: 'us',

 
    specs: [ 'specs/*spec.js' ],

    onPrepare: function () {
        browser.getCapabilities().then(function(caps){  
       console.log("Inside conf prepare : the test running in  "+caps.get('browserName')); 
    });      

    },

    multiCapabilities: [{         
        browserName: 'firefox',
        version: 'latest',         
        platform: 'OS X 10.13',
        name: "firefox-tests",
        shardTestFiles: true,
        maxInstances: 25
    }, { 
        browserName: 'chrome',
        version: 'latest',
        platform: 'Windows 10',
        name: "chrome-tests",
        shardTestFiles: true,
        maxInstances: 25
    }],

    onComplete: function () {

        var printSessionId = function (jobName) {
            browser.getSession().then(function (session) {
                console.log('Job completed with SauceOnDemandSessionID=' + session.getId() + ' job-name=' + jobName);
            });
        }
    }
}
