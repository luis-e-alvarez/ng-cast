angular.module('video-player')
 
.component('app', {
  templateUrl: 'src/templates/app.html',

  controller: function(youTube) {
    this.$onInit = () => this.searchResults('T-rex dance');
    this.videos = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];
    this.selectVideo = (video) => {
      this.currentVideo = video;
    };
    this.returnSearch = (data) => {
      this.videos = data;
      this.currentVideo = data[0];
    };

    this.searchResults = (query) => {
      youTube.search(query, this.returnSearch);
    };
    
  }
});
