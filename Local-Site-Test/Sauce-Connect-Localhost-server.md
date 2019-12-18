https://wiki.saucelabs.com/display/DOCS/Basic+Sauce+Connect+Proxy+Setup

Download the Sauce Connect Proxy from the url as 

https://wiki.saucelabs.com/display/DOCS/Downloading+Sauce+Connect+Proxy

Turn off the windows defender and firewall if any.
  Disable anti-virus like quickHeal
  Test script to use saucelab on demand sekelnium server
  Start cmd in admin user mode in dir : ..\SauceConnect-Proxy-4.5.4-win32\bin
 Run your sauce connect with from admin mode cmd
  sc -u <userName> -k apiKey 
  sc -u pbadhe34 -k c869f49f-95ff-42a0-b5b4-99712d1baeb4

  To diagnose the problems
  sc -u pbadhe34 -k c869f49f-95ff-42a0-b5b4-99712d1baeb4 --doctor

  FRom another cmd start the web server on local mc to deploy application inder test

  From another cmd, run the Protractor-SauveLab environmnet test with saucealb on demnad selenium as default