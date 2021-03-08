---
layout: page
title: Getting Started
permalink: /getting-started/
nav_order: 3
---


Getting started

Creating a new model

Web application

The Threat Dragon web variant stores its threat models in your GitHub repos.
This is so that the models can stay close to the code they are modelling.
Future versions will provide a deeper integration so watch this space but for now,
when you login to Threat Dragon for the first time and hit https://threatdragon.org you will see the Welcome page.
To get started with your threat model click or tap


You will then be presented with a list of your GitHub repositories.
Pick the one where you want to store your new model.
If you have more than 30 repos you might have to page through them until you find the one you want.
Once you have picked your target repo, you will be asked to pick a branch.
Again, if you have more than 30 branches you might need to page.
When you pick a branch you will be taken to the threat model edit page where you can enter general information about your model.

Desktop application

The Threat Dragon desktop variant stores its threat models on your local filesystem. To get started with your threat model click or tap


You will then be taken straight to the threat model edit page where you you can enter general information about your model.

Threat model edit page

The Title field is mandatory. All the rest are optional, but they provide context for your model.
This can be useful if someone else has to pick the model up in the future.
Although only the Title field is mandatory, your model will a be pretty useless without Diagrams.
Add some diagrams to your model by clicking or tapping

Name your diagram and then click or tap Add to confirm or Cancel if you change your mind

Your cool new diagram

At this stage you are just listing the diagrams and naming them.
You add all the diagram elements later.

Once you have entered all the details you need, click or tap Save.
You can also Cancel to exit without saving, or Reload to undo any changes and revert to your last save.

In the web variant of Threat Dragon, models are saved in your chosen branch at a path like ThreatDragonModels/[model name]/[model title].json.
Look at the Demo Threat Model for an example.
Because of this, if you change title of your model it will delete the old model in GitHub and replace it with one at the new path.
This does not apply to the desktop variant.

Congratulations! You have got the basics done. Next step...mapping out your system in a diagram.

Loading a demo model

If you are wondering how to start, you can load a sample threat model. On the welcome page, to download the sample, click or tap

This should give you some ideas on how to get started with your own model. This works for both the web and desktop variants.

Opening an existing model

Web application

If you have a repository that already has threat models, you can open them by clicking or tapping

You will then be able to select a repo and branch and finally you will be able to choose from a list of models.

Desktop application

If you have an existing model file saved locally, you can open it by clicking or tapping

You will then be able to find the model file in your local file system and open it.

This should give you some ideas on how to get started with your own model. This works for both the web and desktop variants.

Threat model report

From the Threat Model details view you can see a summary report of your model listing the diagrams, elements and threats.
Towards the bottom right of the page click

You can customise the report to show or hide

Out of scope model elements

Mitigated threats

Threat model diagrams

On the desktop variant of Threat Dragon you can print the report or save it as a PDF.
On the web variant, you can print the report and then, on most browsers, the print dialog allows you to save the report as a PDF.

