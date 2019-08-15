# firefox-new-tab
A working method to set a custom page as your new tab page in Firefox Quantum, Version 68.0.1

## Installation
**Enable userChrome.css**
+ Enter `about:config` in the URL bar, and accept the warning
+ Set `toolkit.legacyUserProfileCustomizations.stylesheets` to `true`

**Open your profile folder**
+ Enter `about:support` in the URL bar
+ You should see an entry called "Profile Directory". Click on `Open Directory` next to it
+ Copy the `chrome` folder into this repository
+ Restart firefox
+ Done!

## Example: local file as new tab page
![Example new tab page](https://raw.githubusercontent.com/cubetastic33/firefox-new-tab/master/example.png)

Tested on Firefox Quantum 68.0.2, running on Arch Linux
