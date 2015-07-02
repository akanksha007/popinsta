(function(){
var client_id = 'd1c7b5e338f4442fa2668dbbbbd69f73';
var app = angular.module('popinsta', []);
app.factory("InstagramAPI", ['$http', function($http) {
return {
fetchPopular: function(callback){
var endpoint = "https://api.instagram.com/v1/media/popular";
endpoint += "?count=99";
endpoint += "&client_id=" + client_id;
endpoint += "&callback=JSON_CALLBACK";
$http.jsonp(endpoint).success(function(response){
callback(response.data);
});
}
}
}]);
app.controller('ShowImages', function($scope, InstagramAPI){
$scope.data = {};
InstagramAPI.fetchPopular(function(data){
$scope.pics = data;
});
});
})(); 
