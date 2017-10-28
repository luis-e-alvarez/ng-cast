angular.module('video-player')
.service('youTube', function($http) {
  
  this.getVideos = function(queue, callback) {
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      dataType: 'json',
      params: {
        key: window.YOUTUBE_API_KEY,
        chart: 'mostPopular',
        maxResults: 5,
        q: queue,
        part: 'snippet',
      }
    }).then(function successCallback(response) {
      // callback(response.data.items);
      this.videos = response.data.items;
      this.currentVideo = response.data.items[0];
    }.bind(callback), function errorCallback(response) {
      console.log('YOU ARE A FAILURE');
      console.log(response);
    });
  };
});
