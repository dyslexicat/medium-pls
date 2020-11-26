var requestMade = false;

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    if (!requestMade) {
      const url = new URL(details.url);

      chrome.cookies.getAll({ url: url.origin }, function (cookies) {
        if (cookies.length === 0) {
          return;
        } else {
          cookies.forEach((c) =>
            chrome.cookies.remove({
              name: c.name,
              url: url.origin,
              storeId: c.storeId,
            })
          );
        }
      });

      requestMade = true;
      setTimeout(() => {
        requestMade = !requestMade;
      }, 20000);
    }
  },
  { urls: ["*://*.medium.com/*"] }
);
