angular.module('ContactoCtrl', []).controller('ContactoCtrl', ['$scope', '$log',
  function ($scope, $log) {
    $scope.$on('gsapifyRouter:enterSuccess', function (event, element) {
      $log.log('gsapifyRouter:enterSuccess', element.attr('ui-view'), element.attr('data-state'));
    });
  },
]);
