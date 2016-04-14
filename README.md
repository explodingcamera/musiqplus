![musiqpad](https://i.imgur.com/fkiOUOM.png)

![codestyle](https://img.shields.io/badge/code%20style-airbnb-orange.svg) ![Maintenance](https://img.shields.io/maintenance/yes/2016.svg) [![Twitter Follow](https://img.shields.io/twitter/follow/explodingcamera.svg?style=social)](https://twitter.com/ExplodingCamera)

[Chrome](https://chrome.google.com/webstore/detail/cdllelmnnfgcnkfmbcnnginopojgkoih)

[Userscript](https://explodingcamera.xyz/musiqplus/mqplus.user.js) (greasemonkey/tampermonkey)

Bookmark: javascript:($.getScript('<https://explodingcamera.xyz/musiqplus/bm.js>') )

--------------------------------------------------------------------------------

DISCLAIMER: I do not plan to add any features in the future, only Bugfixes. If anyone is interested in working on this Project, contact me.

**Current Features** (14.04.16)

- AFK Autoresponder
- DJ ETA
- Download Song as MP3
- AutoLike
- AutoJoin Waitlist
- AutoClearConsole
- Custom Themes (currently only one included)
- Custom Background (Theme default if none)
- Real Fullscreen Video
- Notifications

**Changelog**

- **14.04.2016** A lot of Bugfixes. FINAL VERSION!
- **18.01.2016** AutoLike/Join are now fixed and don't spam the server anymore. Song download is implemented but I still need to fix some serverstuff beaucause chrome doesn't want me to use an iframe with a non-ssl site :( . I've also added some new Planned Features.
- **19.01.2016** Song download is now implemented and Custom Backgrounds added.
- **20.01.2016** Userscript extension loader added, bugs fixed and new Plug theme. I've also added DJ ETA.
- **21.01.2016** ETA fixed
- **22.01.2016** ETA fixed again + added AFK Autoresponse
- **24.01.2016** AFK Autoresponse fixed + added real video fullscreen
- **25.01.2016** Bugfixes
- **02.02.2016** [new Cdn Domain](https://twitter.com/ExplodingCamera/status/694296371877273603), bugfixes.
- **04.02.2016** You can now import Playlists and I added a way to load the NCS Theme bc the way I'm loading themes overides theirs. Clear Console is also back and I'm working on Notifications
- **06.02.2016** Bugfixes + foundations for Notifications + User is next DJ Notification! + Custom Mention/Notification Sounds!!
- **07.02.2016** Import Playlist removed
- **14.02.2016** mention notification added.

# Issues / Feature Requests

Please use this repository's Github [issues](https://github.com/explodingcamera/musiqplus/issues) to report a bug report, feature request or enhancement.

# Developer(s)

- [Henr-y / explodingcamera](https://github.com/henr-y)

# Translations

Just do it like i did for german.

# Contribute

**Dependencies:**

- [Node.JS](http://nodejs.org/download/).
- Make a fork of this repository.
- Clone the forked repository to an empty folder.
- Cd to the folder
- Run `npm i` to set up the environment.
- If you added a new Feature to settings-list, increase the version by 0.0.1 or you will get errors.
- Run `gulp browserify` to compile the code and to test run `gulp` - this will open a new Window in chrome to test the Interface (to toggle the Interface, use musiqplus.toggleSettings()).
- Submit your changes as a Pull Requests [here](https://github.com/explodingcamera/musiqplus/pulls).
