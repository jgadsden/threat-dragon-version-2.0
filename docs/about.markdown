---
layout: home
title: About
nav_order: 1
permalink: /about
---

## [OWASP](https://www.owasp.org) Threat Dragon

Threat Dragon is a free, open-source, cross-platform [threat modeling](https://owasp.org/www-community/Threat_Modeling)
application including system diagramming and a rule engine to auto-generate threats/mitigations. It is an
[OWASP Incubator Project](https://owasp.org/www-project-threat-dragon/) and follows the values and principles of the
[threat modeling manifesto](https://www.threatmodelingmanifesto.org/).
The roadmap for the project is a great UX, a powerful rule engine and integration with other development lifecycle tools.

There is a good overview of [threat modeling and risk assessment](https://owasp.org/www-community/Application_Threat_Modeling)
from OWASP, and this expands on what Threat Dragon will achieve: 
* designing the data flow diagram
* automatic determining and ranking threats
* suggested mitigations
* entry of mitigations and counter measures

The application comes in two variants:

1. [**A desktop application**](https://github.com/OWASP/threat-dragon-desktop/releases): This is based on
[Electron](https://electron.atom.io/). There are installers available for both Windows and Mac OSX, as well as rpm and
debian packages for Linux. For the desktop variant models are stored on the local filesystem.

1. [**A web application**](https://github.com/owasp/threat-dragon/releases): For the web application, models files
are stored in GitHub (other storage will become available). There is a [a working protoype](https://threatdragon.org)
which gives a good example of what Threat Dragon does, although it  is not  up to date.
