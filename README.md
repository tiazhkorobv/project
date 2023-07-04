# Project name:  **YT Unhiden Mouse Pointer**.
#### Video Demo:  https://youtu.be/ZXa00Y7LeDQ

### Description:
**YT Unhiden Mouse Pointer** is a **Chrome extension** that enhances your YouTube viewing experience by allowing you to change the cursor of the playing video.

### Features:
Unhides the mouse pointer during video playback on YouTube.
Improves usability by making it easier to interact with video controls and others extensions.

### Introduction:
When watching educational videos in a foreign language on YouTube, learners often rely on translation tools to enhance their understanding and expand their language skills.
'Reverso Context' translate extension for the Chrome browser is a popular and widely used tool and  a translation assistant. This extension allows to quickly look up translations and contextual examples to grasp the meaning of unfamiliar words and phrases.
One of the advantages of the 'Reverso Context' extension is its seamless integration with YouTube. User can conveniently translate words and phrases without the need to pause the video by clicking Pause/Play button. Simply by hovering the mouse pointer over the subtitle field, the extension automatically displays the translation, allowing to keep up with the video flow and maintain user’s focus.
There is an inconvenience of the YouTube player - disappearing of cursor during video playback. When user needs to interact with the video controls or navigate through the timeline, the cursor becomes invisible after some seconds of idling. That creates a disruption in workflow and can be particularly problematic when using translation tools, as user needs to locate specific words or phrases for translation.

By addressing these challenges, I introduce the YT Unhidden Mouse Pointer extension to provide a seamless learning experience on YouTube. This extension ensures that the cursor remains visible throughout video playback, allowing learners to effortlessly interact with translation tools and focus on comprehending the content.
Title: Installing the YT Unhidden Mouse Pointer Extension


### Usage:
Step-by-step Installation Guide:
1. Download this repo to this path: C:\Program Files\%YourBrowserFolder%\Application\My Extensions\.
2. Open Settings\\Extensions page and switch on Developers mode.
3. Click Load unpacked and chose folder where YT Unhidden Mouse Pointer Extension lives.
4. After YT Unhidden Mouse Pointer Extension appeared in the extensions list - activate it.

Once installed, the extension will be ready to use on YouTube, ensuring a visible cursor during video playback.


### Files:
1. The manifest.json file contains code specifies the necessary details for the extension:
  + "name" indicates the name of the extension.
  + "version" denotes the current version of the extension.
  + "manifest_version" specifies the version of the manifest file format.
  + "content_scripts" defines the content script, which targets URLs containing "://.youtube.com/*" and utilizes the JavaScript file "content.js" to implement the cursor unhiding functionality.
  + "icons" includes the extension's icon, sized 128x128 pixels, represented by the file "CursorYT.png".

2. The content.js file is responsible for implementing the functionality of unhiding the mouse pointer on YouTube videos. The code targets the YouTube video player element and adds event listeners for the mouseenter and mouseleave events. When the mouse enters the video player, the cursor is set to 'auto', making it visible. When the mouse leaves the video player, the cursor is set to an empty string, which restores the default cursor behavior.

3. The CursorYT.png file is icon  fatures extension in browser extantion bar.

## Install this extension and enhance your YouTube watching!







