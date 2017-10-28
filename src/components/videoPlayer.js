angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    video: '<',
    buildURL: '<',
    updatePlayer: '<',  
  },

  templateUrl: 'src/templates/videoPlayer.html'
});
