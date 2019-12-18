'use strict'; 
describe('phoneModule App Test Page', function() {  
  it('should redirect index.html to index.html#/phones', function() {
console.log("The Browser object features listed \n\n");
   /*
   //Iterate over the browser properties and functions
  var prop ="";
   for(prop in browser)
    {
     console.log(prop +" = "+browser[prop]);
     console.log("\n");
     }
   */
     
    browser.get('http://192.168.0.27:8090/app/');
    console.log("Browser navigation to index.html#/phones");
   var location = browser.getCurrentUrl();
location.then(function(data){console.log("Browser url is "+data);
});
expect(browser.getCurrentUrl()).toMatch("/phones"); 

var phoneList = element.all(by.repeater('phone in phones'));

 
 phoneList.then(function(list){console.log("Phone list is "+list);
});
 
  /*
var ViewElement  = element.all(by.css('[ng-view] div')).first().getText();
  

ViewElement.then(function(url){console.log("The current template view contents is "+url);
});
*/   
 
   });
 });

 
  describe('Phone model list view test', function() {
     

    beforeEach(function() { 
      browser.get('http://192.168.0.27:8090/app/index.html');
    });

    it('should filter the phone list as user types into the search box', function() {

      var phoneList = element.all(by.repeater('phone in phones'));
      expect(phoneList.count()).toBe(20);

      var addQuery = element(by.model('query'));
    
      addQuery.sendKeys('samsung');

      //var phoneElement  = element.all(by.css('[.phones li] ul'));//.first();

    phoneList  = element.all(by.repeater('phone in phones'));

  //phoneList.then(function(data){console.log("Phone list is "+data);
  //});

       expect(phoneList.count()).toBe(5);

       addQuery.clear();       
        

        addQuery.sendKeys('motorola');        
       
        expect(phoneList.count()).toBe(8);
      
     addQuery.clear();       

      addQuery.sendKeys('nexus');
      expect(phoneList.count()).toBe(1);


    });

    it('should be possible to control phone order via the drop down select box', function() {

      var phoneNameColumn = element.all(by.repeater('phone in phones').column('phone.name'));
      var query = element(by.model('query'));

      function getNames() {
        return phoneNameColumn.map(function(elm) {
          return elm.getText();
        });
      }

      query.sendKeys('tablet'); //let's narrow the dataset to make the test assertions shorter

      expect(getNames()).toEqual([
        "Motorola XOOM\u2122 with Wi-Fi",
        "MOTOROLA XOOM\u2122"
      ]);

      element(by.model('orderProp')).element(by.css('option[value="name"]')).click();

      expect(getNames()).toEqual([
        "MOTOROLA XOOM\u2122",
        "Motorola XOOM\u2122 with Wi-Fi"
      ]);
    });


    it('should render phone specific links', function() {
      var query = element(by.model('query'));
      query.sendKeys('nexus');
      element.all(by.css('.phones li a')).first().click();      browser.getCurrentUrl().then(function(url) {
        expect(url).toEqual('http://192.168.0.27:8090/app/index.html#/phones/nexus-s');
      });
    });
  });


  describe('Phone detail view test', function() {

beforeEach(function() {
   
 browser.get  ('http://192.168.0.27:8090/app/index.html#/phones/nexus-s');
    }); 

    it('should display nexus-s page', function() {
      expect(element(by.binding('phone.name')).getText()).toBe('Nexus S');
    });


    it('should display the first phone image as the main phone image', function() {
//failure at this test
      expect(element(by.css('img.phone')).getAttribute('src')).toMatch(/img\/phones\/nexus-s.0.jpg/);
    });

 
    it('should swap main image if a thumbnail image is clicked on', function() {  

element(by.css('.phone-thumbs li:nth-child(3) img')).click();
      expect(element(by.css('img.phone')).getAttribute('src')).toMatch(/img\/phones\/nexus-s.2.jpg/);  

      element(by.css('.phone-thumbs li:nth-child(1) img')).click();
      expect(element(by.css('img.phone')).getAttribute('src')).toMatch(/img\/phones\/nexus-s.0.jpg/);
    });

  

  });
 


 
