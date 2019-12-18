const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
//These values may NOT be correctly read on Windows platform
	//sauceUser: process.env.SAUCE_USERNAME,
	//sauceKey: process.env.SAUCE_ACCESS_KEY,

    //Get the access key from saucealab login page
     sauceUser: 'pbadhe34',
	sauceKey: 'c869f49f-95ff-42a0-b5b4-99712d1baeb4',

	sauceRegion: 'us',

//Using SauceLabs selenium server at https://ondemand.saucelabs.com:443/wd/hub

	specs: [ 'specs/*spec.js' ],

   
	onPrepare: async () => {
		await browser.waitForAngularEnabled(false);
		const caps = await browser.getCapabilities();

           console.log("Inside conf prepare : the test running in  "+caps.get('browserName'));

		jasmine.getEnv().addReporter(new SpecReporter({
			spec: {
				displayStacktrace: true,
			}
		}));
	},
	framework: 'jasmine',

    //To run in sequence limit the maxSessions: 1  

      maxSessions: 6,  // default is unlimited sessions

	multiCapabilities: [
		{
			browserName: 'chrome',
			browserVersion: 'latest',
			platformName: 'Windows 10',
			'goog:chromeOptions': { 'w3c': true },
			'sauce:options': {
				seleniumVersion: '3.141.59',
				name: 'chrome-protractor-test',
				build: 'Sample Protractor Tests'
			},
			shardTestFiles: true,
			maxInstances: 5,
                count:1
		},
		{
			browserName: 'firefox',
			browserVersion: 'latest',
			platformName: 'Windows 10',
			'sauce:options': {
				seleniumVersion: '3.141.59',
				name: 'firefox-protractor-test',
				build: 'Sample Protractor Tests'
			},
			shardTestFiles: true,
 			maxInstances: 4, //run faster with more parallel instances              
                //specs: 'specs/protractor-sample-spec.js',
                count: 4 //repeat the test script execution

		},
         {
			browserName: 'internet explorer',
			browserVersion: 'latest',
			platformName: 'Windows 10',
                'ignoreZoomSetting':true,
			'sauce:options': {
				seleniumVersion: '3.141.59',
				name: 'IE-protractor-test',
				build: 'Sample Protractor Tests'
			},
			shardTestFiles: true,
			maxInstances: 2,
                count:1
		},

	],
	baseUrl: 'https://www.saucedemo.com',

	onComplete: async () => {
		let printSessionId = async (jobName) => {
			let session = await browser.getSession();
			console.log('SauceOnDemandSessionID=' + session.getId() + ' job-name= ' + jobName);
		};
		printSessionId('test-job');

		//await browser.executeScript("sauce:job-result=" + (SpecReporter.valueOf().result()));
	},
};
