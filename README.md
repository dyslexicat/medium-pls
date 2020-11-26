# medium-pls
This is a chrome extension I made to clear cookies before visiting *.medium.com URLs so that the annoying messages stop.

**Disclaimer: there are probably better hacks around medium's paywall out there**

## installation
1. clone the repo
2. visit `chrome://extensions` and turn __developer mode on__
3. click "load unpacked" and select the cloned folder

## how it works
it has a listener for webRequests made to any medium subdomain
gets the cookies for that subdomain and removes them one by one
and there is a basic internal timer for 20 seconds to stop it from the function getting called repeatedly on multiple requests when the page loads