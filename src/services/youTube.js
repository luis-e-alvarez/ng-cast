angular.module('video-player')
.service('youTube', function($http) {
  
  this.search = function(queue, callback) {
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
      callback(response.data.items);
    }, function errorCallback(response) {
      console.log('YOU ARE A FAILURE');
      console.log(response);
    });
  };
});
