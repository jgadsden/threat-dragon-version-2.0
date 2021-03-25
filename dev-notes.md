# Developer notes for [OWASP](https://www.owasp.org) [Threat Dragon](https://owasp.org/www-project-threat-dragon/) version 2.x

## Overview

This is a collection of notes used during development, most of which should be up to date - if not then raise an issue.

The recipes are for both Windows and Linux/MacOS; in general the `npm` and `git` commands are the same on all platforms,
but some of the commands (eg `cd ../..`) need to be modified if running on a Windows platform.

Threat Dragon is a [node.js](https://nodejs.org)
[single page application](https://en.wikipedia.org/wiki/Single-page_application) built on the
[Vue](https://v3.vuejs.org/guide/introduction.html#what-is-vue-js) framework.
It comes in two variants, this [web application](https://github.com/OWASP/threat-dragon)
and also a [desktop application](https://github.com/OWASP/threat-dragon-desktop).

## Running the application
* Build web app from td/app
```
npm install
npm run-script build
```

* Build api from td/server
```
npm install
npm run-script build
npm run-script dev
```

Navigate to:
* http://localhost:3000/
* http://localhost:3000/api/pdf
* http://localhost:3000/api/version

## Docker
Docker file can be used to run the webapp:
* build from td/ directory : `docker build -t threat-dragon .`
* run using: `docker run -t threat-dragon`
