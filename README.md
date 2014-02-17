# Ghost Admin Ember Demo

This repo rebuilds some parts of the Ghost admin interface in order to serve as a decision support for the [discussion](https://github.com/TryGhost/Ghost/issues/2144) whether to switch to ember or angular.

It is based on [Ember App Kit](https://github.com/stefanpenner/ember-app-kit) by Stefan Penner. EAK offers a sophisticated development workflow built around [Grunt](http://gruntjs.com/). It uses ES6 modules transpiled to AMD (RequireJS-style) modules. For the API calls simple node mocks are used. 


# Getting started

Make sure you have node, grunt-cli, and bower installed.

Run `npm install` to install the grunt dependencies (the postinstall hook also runs `bower install`).

Once the dependencies are installed, you can simply run `grunt server` and navigate to http://0.0.0.0:8080 to see the app in action.


## License

Copyright 2014 by Manuel Mitasch and Ember App Kit Contributors, and licensed under the MIT License. See included
[LICENSE](/stefanpenner/ember-app-kit/blob/master/LICENSE) file for details.
