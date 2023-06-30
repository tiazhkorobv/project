// selects the video player element with the class "video-stream" and "html5-main-video"
const videoPlayer = document.querySelector('.video-stream.html5-main-video');
// adds an event listener to the element when 'mouseenter' event occured. 
videoPlayer.addEventListener('mouseenter', () => {
  // When the mouse enters the video player, the provided callback function is executed.
  // sets the CSS style property of the video player element to 'auto' -  
  // the cursor style to the default browser cursor, making it visible.
  videoPlayer.style.cursor = 'auto';
});
//adds an event listener to the video player element for the 'mouseleave' event. 
//When the mouse leaves the video player, the provided callback function is executed. 
videoPlayer.addEventListener('mouseleave', () => {
  // sets the CSS style property of the video player element to an empty string. 
  // This removes any custom cursor style, restoring the default cursor behavior.
  videoPlayer.style.cursor = '';
});
