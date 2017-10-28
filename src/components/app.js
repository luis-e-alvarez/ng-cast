angular.module('video-player')
 
.component('app', {
  templateUrl: 'src/templates/app.html',

  controller: function(youTube) {
    this.videos = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];
    youTube.getVideos('', this);
    this.update = (video) => {
      this.currentVideo = video;
    };
    this.returnSearch = (data) => {
      this.videos = data;
    };

    this.search = (query) => {
      youTube.getVideos(query, this);
    };
    
  }
});
