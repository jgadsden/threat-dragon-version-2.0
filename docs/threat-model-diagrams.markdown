---
layout: page
title: Threat Model Diagrams
permalink: /threat-model-diagrams/
nav_order: 4
---


## [OWASP](https://www.owasp.org) Threat Dragon

[Threat Dragon](http://owasp.org/www-project-threat-dragon)

Threat model diagrams

Diagram title

To edit the diagram title, click or tap the  icon towards the top right of the diagram editor. When you have edited it, tap or click


to save your change, or


to cancel and discard your change.

Processes, data stores and actors

Add model elements to your diagram by clicking or tapping the relevant shape in the stencil on the left side of the diagram editor. Once added they can be selected by clicking them to see their properties and threats and dragged around the diagram. to delete an element, first select it and then click on the red icon it the elements top left corner...

image showing the element delete tool

Data flows and trust boundaries

Data flows and trust boundaries can be added to the diagram by clicking their shape in the stencil on the left side of the diagram editor.
Once added, their ends can be dragged around the diagram.
To connect the end of a data flow to a process, data store or actor, you can drag one of its ends onto the element.

An easier way to draw data flows between elements is to select your first element,
then click the grey link tool, next to the red remove tool near the top right of the selected element.
This turns the link tool green. Then, when you click another element, a new data flow will be created, linking the first element to the second.

element link tool

Extra vertices can be added by clicking at some point on the line.
These new vertices can also be dragged to position the data flow or trust boundary.
Vertices can be removed by clicking the remove tool that appears when you mouse near to the vertex.

vertex remove tool

A data flow can be selected by clicking the Link options tool that appears when you mouse near to the link.
Once selected you can edit its properties or add threats to it. Trust boundaries cannot be selected.

flow select tool

Data flows and trust boundaries can be deleted by clicking the red remove tool that appear when you mouse near to them.

flow remove tool

Out of scope elements

Processes, data stores, actors and data flows can be marked as out of scope.
You can use this for elements that are needed to help a diagram make sense, but for which you are not interested in creating threats.
To help reviewers (and as a reminder for future-you) you can specify a reason why elements have been marked out of scope.
Threat generation is disabled for these elements. Out of scope elements are indicated in diagrams with dashed lines:

out of scope elements with dashed lines

Elements with open threats

Processes, data stores, actors and data flows that have open (unmitigated) threats are highlighted in red so that you know where to focus your attention:

elements with open threats are red

Editing toolbar

The toolbar on the diagram editing page supports some general diagramming features:

 Toggles gridlines on/off. When gridlines are on, elements snap to them for neater models.

 Cancels the edit and returns to the threat model details view.

 Clears all the elements from the model.

 Reloads the diagram from the last save, discarding any changes.

 Generates threats for the selected element using the threat generation rule engine.

 Duplicates the selected element as a new element.

 Saves the threat model to your local browser storage.

Element properties

To edit the properties of a model element, first select it.
The element properties are shown on the right side of the diagram editor.
In a future version of Threat Dragon, these properties will be used by the threat generation engine to suggest threats and mitigations for your model.

Adding and editing threats

To add threats to elements in your diagram, select an element and tap or click Edit Threats on the left side of the diagram editor.
This will collapse the model element stencil and show the threats for the selected element. To add a new threat, tap or click

Enter the details for your threat in the threat dialog.
The Title and STRIDE Threat Type are mandatory. When you are done, hit Save and your new threat should appear.
To edit it again, tap or click its title.
