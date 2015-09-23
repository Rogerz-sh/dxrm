(function (window) {
  var app = angular.module('app', ['ngRoute']);

  app.controller('mainCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.menu = {'header': [], 'footer': []};

    $http.get('data/menu.json').success(function (data) {
      console.log(data);
      $scope.menu = data;
    });
  }]);
})(window)