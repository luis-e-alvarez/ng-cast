angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    video: '<',
    buildURL: '<',
    updatePlayer: '<',  
  },
  
  controller: function() {
    
  },

  templateUrl: 'src/templates/videoPlayer.html'
});
