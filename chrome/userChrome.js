(function() {
    if (location != 'chrome://browser/content/browser.xul') return;
    // Set this to the URL of the webpage you want as your new tab page
    // It can be a local file, like file:///path/to/file.html
    // or a remote webpage, like https://start.duckduckgo.com
    // or any other file you'd like
	aboutNewTabService.newTabURL = 'file:///data/Documents/GitHub/new-tab/index.html';
})();
