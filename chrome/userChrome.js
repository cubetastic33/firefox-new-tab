/*
Copyright © 12019 HE cubetastic
Available for use under the MIT License:
https://opensource.org/licenses/MIT
*/

(function() {
	if (location != 'chrome://browser/content/browser.xul') return;
	// Set this to the URL of the webpage you want as your new tab page
	// It can be a local file, like file:///path/to/file.html
	// or a remote webpage, like https://example.com
	// or any other file you'd like
	aboutNewTabService.newTabURL = 'https://start.duckduckgo.com';
})();
