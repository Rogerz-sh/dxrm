(function (window) {
  var app = angular.module('app', ['ngRoute']);

  //主界面控制器
  app.controller('mainCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.menu = {'header': [], 'footer': []};

    $scope.panel = {
      show: false,
      showIdx: -1
    };
    $scope.panel.showIdx = -1;

    $scope.showPanel = function (item) {
      $scope.panel.show = true;
      $scope.panel.showIdx = item.id;
      var url = '/' + item.target.substr(1) + '/' + item.id;
      $location.url(url);
    }

    $scope.hidePanel = function () {
      $scope.panel.showIdx = -1;
      $scope.panel.show = false;
    }

    $scope.$on('$locationChangeSuccess', function () {      
      $scope.panel.showIdx = ~~$location.path().match(/\d+/) || -1;
      if ($scope.panel.showIdx === -1) {
        $scope.panel.show = false;
      } else {
        $scope.panel.show = true;
      }
    })

    $http.get('data/menu.json').success(function (data) {
      $scope.menu = data;
    });
  }]);

  //主面板控制器
  app.controller('panelCtrl', ['$scope', function ($scope) {
    console.log('panel')
  }]);

  //人物面板控制器
  app.controller('userCtrl', ['$scope', function ($scope) {
    console.log('user')
  }]);

  //材料面板控制器
  app.controller('materialCtrl', ['$scope', function ($scope) {

  }]);

  //丹药面板控制器
  app.controller('pillCtrl', ['$scope', function ($scope) {

  }]);

  //法宝面板控制器
  app.controller('treasureCtrl', ['$scope', function ($scope) {

  }]);

  //功法面板控制器
  app.controller('magicCtrl', ['$scope', function ($scope) {

  }]);

  //日志面板控制器
  app.controller('logCtrl', ['$scope', function ($scope) {
    console.log('log');
  }]);

  //地图面板控制器
  app.controller('mapCtrl', ['$scope', function ($scope) {

  }]);

  //灵宠面板控制器
  app.controller('petCtrl', ['$scope', function ($scope) {

  }]);

  //仙缘面板控制器
  app.controller('relationCtrl', ['$scope', function ($scope) {

  }]);

  //系统面板控制器
  app.controller('systemCtrl', ['$scope', function ($scope) {

  }]);

  //战斗面板控制器
  app.controller('battleCtrl', ['$scope', function ($scope) {

  }]);

  app.directive('panelSwitch', function () {
    return {
      restrict: 'AEC',
      link: function (scope, element, attr) {
        $(element[0]).tap(function () {
          scope.showPanel(scope.item);
        });
      }
    }
  })

  //路由功能
  app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/panel.html',
        controller: 'panelCtrl'
      })
      .when('/user/:id', {
        templateUrl: 'views/user.html',
        controller: 'userCtrl'
      })
      .when('/material/:id', {
        templateUrl: 'views/material.html',
        controller: 'materialCtrl'
      })
      .when('/pill/:id', {
        templateUrl: 'views/pill.html',
        controller: 'pillCtrl'
      })
      .when('/treasure/:id', {
        templateUrl: 'views/treasure.html',
        controller: 'treasureCtrl'
      })
      .when('/magic/:id', {
        templateUrl: 'views/magic.html',
        controller: 'magicCtrl'
      })
      .when('/log/:id', {
        templateUrl: 'views/log.html',
        controller: 'logCtrl'
      })
      .when('/map/:id', {
        templateUrl: 'views/map.html',
        controller: 'mapCtrl'
      })
      .when('/pet/:id', {
        templateUrl: 'views/pet.html',
        controller: 'petCtrl'
      })
      .when('/relation/:id', {
        templateUrl: 'views/relation.html',
        controller: 'relationCtrl'
      })
      .when('/system/:id', {
        templateUrl: 'views/system.html',
        controller: 'systemCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      //$locationProvider.html5Mode(true);
  }]);
})(window)