Note that this repository has been migrated from Mike Goodwin's [original](https://github.com/mike-goodwin/owasp-threat-dragon) ,
which has the issues and pull requests from October 2015 up to June 2020.

<p align="center">
  <img src="https://raw.githubusercontent.com/owasp/threat-dragon-desktop/main/content/images/threatdragon_logo_image.svg" width="200" alt="Threat Dragon Logo"/>
</p>

[![Build Status](https://travis-ci.org/owasp/threat-dragon.svg?branch=main)](https://travis-ci.org/owasp/threat-dragon)
[![codecov.io](http://codecov.io/github/owasp/threat-dragon/coverage.svg?branch=main)](http://codecov.io/github/owasp/threat-dragon?branch=main)
[![GitHub license](https://img.shields.io/github/license/owasp/threat-dragon.svg)](LICENSE.txt)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/OWASP/threat-dragon.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/OWASP/threat-dragon/context:javascript)

## [OWASP](https://www.owasp.org) Threat Dragon #

Threat Dragon is a free, open-source, cross-platform threat modelling application including system diagramming
and a threat rule engine to auto-generate threats/mitigations.
It is an [OWASP Incubator Project](https://www.owasp.org/index.php/OWASP_Threat_Dragon) and follows the values and principles
of the [threat modeling manifesto](https://www.threatmodelingmanifesto.org/).

1. [**A web application (this repo)**](https://github.com/owasp/threat-dragon):

2. [**A desktop application**](https://github.com/owasp/threat-dragon-desktop): 
installers for Windows, Mac OSX and Linux.

[End user help](https://threatdragon.github.io) is available for both variants

## Development
We need contributors for this project, and there are some [developer notes](dev-notes.md) that should help.

To get started clone this repo noting that it contains a sub-module for the docs: `git clone --recursive git@github.com:OWASP/threat-dragon.git`
If you cloned the repo with out the recursive flag use command
`git submodule update --init --recursive` to populate the docs directory.

## Vulnerability disclosure

If you find a vulnerability in this project please let us know and we will fix it as a priority.
For secure disclosure, please see the [security policy](SECURITY.md).

### Project leaders
* Mike Goodwin (mike.goodwin@owasp.org)
* Jon Gadsden (jon.gadsden@owasp.org)

