# Project name:  Unhide YT mouse pointer!
#### Video Demo:  <URL HERE>
#### Description:

Extension Name: YT Unhiden Mouse Pointer
Version: 1.0
Manifest Version: 3

### Description:
YT Unhiden Mouse Pointer is a Chrome extension that enhances your YouTube viewing experience by allowing you to change the cursor of the playing video. By default, YouTube hides the cursor when a video is playing, which can be inconvenient when you want to interact with the video controls. This extension solves that problem by unhiding the mouse pointer whenever you hover over the video player.

### Features:
Unhides the mouse pointer during video playback on YouTube.
Improves usability by making it easier to interact with video controls and navigate through the timeline.
Seamless integration with the YouTube website.
Lightweight and unobtrusive.

### Usage:
Once installed, the extension will automatically activate whenever you visit YouTube.
Hover your mouse over the video player to see the cursor unhiding and appearing as usual.
Interact with the video controls, adjust the volume, and navigate through the timeline effortlessly.

### Files:
The manifest.json file contains code specifies the necessary details for the extension:
"name" indicates the name of the extension.
"version" denotes the current version of the extension.
"manifest_version" specifies the version of the manifest file format.
"content_scripts" defines the content script, which targets URLs containing "://.youtube.com/*" and utilizes the JavaScript file "content.js" to implement the cursor unhiding functionality.
"icons" includes the extension's icon, sized 128x128 pixels, represented by the file "CursorYT.png".
#### The content.js file is 
responsible for implementing the functionality of unhiding the mouse pointer on YouTube videos. The code targets the YouTube video player element and adds event listeners for the mouseenter and mouseleave events. When the mouse enters the video player, the cursor is set to 'auto', making it visible. When the mouse leaves the video player, the cursor is set to an empty string, which restores the default cursor behavior.
#### The CursorYT.png file is icon  fatures extension in browser extantion bar.

Install the extension now and enhance your watching on YouTube!
