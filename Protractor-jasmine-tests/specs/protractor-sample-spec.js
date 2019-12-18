describe('Protractor SauceLab Test Demo', function() {
    it('should confirm page title', async () => {
        await browser.executeScript("sauce:context=Going to 'saucedemo.com'");
        await browser.get('https://www.saucedemo.com');

browser.getCapabilities().then(function(caps) {
           console.log("The test script running in  "+caps.get('browserName'));
 });
     
       const caps = await browser.getCapabilities();

       console.log("Inside test script : the test running in  "+caps.get('browserName'));

      
     browser.getTitle().then(function(webpagetitle){
           console.log("The page title read here is "+webpagetitle);
     });

     console.log("The page title with  await is "+await browser.getTitle());

        await browser.executeScript("sauce:context=Asserting 'Swag Labs' title is present");
        let title = await browser.getTitle();
        expect(title).toEqual('Swag Labs');
    });
});
