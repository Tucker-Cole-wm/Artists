var artistControllers = angular.module('artistControllers', []);

artistControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
    $scope.artists = $http.get('js/data.json')
        .then(function(response) {
                $scope.artists = response.data;
                $scope.artistOrder = 'name';
            },
            function(result) {
                console.log('HTTP request failed with result: ' + result);
            });
}]);

artistControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $scope.artists = $http.get('js/data.json')
        .then(function(response) {
            $scope.artists = response.data;
            $scope.whichItem = $routeParams.itemId;

            //Set a variable for the next and previous array items.
            if ($routeParams.itemId > 0) {
                $scope.prevItem = Number($routeParams.itemId) - 1
            } else {
                $scope.prevItem = $scope.artists.legnth - 1;
            }
            if ($routeParams.itemId < $scope.artists.legnth - 1) {
                $scope.nextItem = Number($routeParams.itemId) + 1
            } else {
                $scope.nextItem = 0;
            }
        });
}]);

artistControllers.controller('ApplyController', ['$scope', function($scope) {
    $scope.register = function() {
        $scope.message = 'Welcome ' + $scope.user.firstname;
    }
}]);
