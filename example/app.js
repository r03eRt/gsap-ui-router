(function () {

  'use strict';

  console.log(angular.version);

  angular.module('MainCtrl', []).controller('MainCtrl', ['$scope', '$state', '$log',
    function ($scope, $state, $log) {

      $scope.$on('gsapifyRouter:enterStart', function (event, element) {
        if ($state.history.length) {
          $log.log('gsapifyRouter:enterStart', element.attr('ui-view'), element.attr('data-state'));
        }
      });

      // $scope.$on('gsapifyRouter:enterSuccess', function (event, element) {
      //   if ($state.history.length) {
      //     $log.log('gsapifyRouter:enterSuccess', element.attr('ui-view'), element.attr('data-state'));
      //   }
      // });

      $scope.$on('gsapifyRouter:leaveStart', function (event, element) {
        if ($state.history.length) {
          $log.log('gsapifyRouter:leaveStart', element.attr('ui-view'), element.attr('data-state'));
        }
      });

      $scope.$on('gsapifyRouter:leaveSuccess', function (event, element) {
        if ($state.history.length) {
          $log.log('gsapifyRouter:leaveSuccess', element.attr('ui-view'), element.attr('data-state'));
        }
      });

    },
  ]);

  angular.module('HomeCtrl', []).controller('HomeCtrl', ['$scope', '$log',
    function ($scope, $log) {
      $scope.$on('gsapifyRouter:enterSuccess', function (event, element) {
        $log.log('gsapifyRouter:enterSuccess', element.attr('ui-view'), element.attr('data-state'));
      });
    },
  ]);

  angular.module('Page1Ctrl', []).controller('Page1Ctrl', ['$scope', '$log',
    function ($scope, $log) {
      $scope.$on('gsapifyRouter:enterSuccess', function (event, element) {
        $log.log('gsapifyRouter:enterSuccess', element.attr('ui-view'), element.attr('data-state'));
      });
    },
  ]);

  angular.module('Page2Ctrl', []).controller('Page2Ctrl', ['$scope', '$log',
    function ($scope, $log) {
      $scope.$on('gsapifyRouter:enterSuccess', function (event, element) {
        $log.log('gsapifyRouter:enterSuccess', element.attr('ui-view'), element.attr('data-state'));
      });
    },
  ]);

  angular.module('ElectroeliteApp',
  ['ngAnimate',
   'ui.router',
   'mobile-angular-ui',
   'hj.gsapifyRouter',
   'MainCtrl',
   'HomeCtrl',
   'Page1Ctrl',
   'Page2Ctrl',
   'InicioCtrl',
   'ClientesCtrl',
   'ContactoCtrl',
   'SolucionesCtrl',
   'FabricantesCtrl',
   'CatalogoCtrl'])

    .config(['$stateProvider', '$locationProvider', '$urlRouterProvider', 'gsapifyRouterProvider',
      function ($stateProvider, $locationProvider, $urlRouterProvider, gsapifyRouterProvider) {

        gsapifyRouterProvider.initialTransitionEnabled = true;

        gsapifyRouterProvider.defaults = {
          enter: 'slideRight',
          leave: 'slideLeft',
        };

        gsapifyRouterProvider.transition('slideAbove', {
          duration: 1,
          ease: 'Quart.easeInOut',
          css: {
            y: '-100%',
          },
        });

        gsapifyRouterProvider.transition('slideBelow', {
          duration: 1,
          ease: 'Quart.easeInOut',
          css: {
            y: '100%',
          },
        });

        gsapifyRouterProvider.transition('slideLeft', {
          duration: 1,
          ease: 'Quint.easeInOut',
          css: {
            x: '-100%',
          },
        });

        gsapifyRouterProvider.transition('slideRight', {
          duration: 1,
          ease: 'Quint.easeInOut',
          delay: 0.5,
          css: {
            x: '100%',
          },
        });

        gsapifyRouterProvider.transition('fadeIn', {
          duration: 0.5,
          delay: 0.5,
          css: {
            opacity: 0,
          },
        });

        gsapifyRouterProvider.transition('fadeOut', {
          duration: 0.5,
          css: {
            opacity: 0,
          },
        });

        gsapifyRouterProvider.transition('scaleDown', {
          duration: 0.5,
          css: {
            scale: 0,
            opacity: 0,
          },
        });

        // $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
          url: '/',
          views: {
            main: {
              templateUrl: 'example/home.html',
              controller: 'HomeCtrl',
            },
          },
          data: {
            'gsapifyRouter.main': {
              enter: {
                'in': {
                  transition: 'fadeIn',
                  priority: 1,
                },
                out: {
                  transition: 'fadeOut',
                  priority: 1,
                },
              },
            },
          },
        });

        $stateProvider.state('page1', {
          url: '/page1',
          views: {
            main: {
              templateUrl: 'example/page1.html',
              controller: 'Page1Ctrl',
            },
          },
          data: {
            'gsapifyRouter.main': {
              enter: {
                'in': {
                  transition: 'fadeIn',
                  priority: 1,
                },
                out: {
                  transition: 'fadeOut',
                  priority: 1,
                },
              },
            },
          },
        });

        $stateProvider.state('page2', {
          url: '/page2',
          views: {
            main: {
              templateUrl: 'example/page2.html',
              controller: 'Page2Ctrl',
            },
          },
          data: {
            'gsapifyRouter.main': {
              enter: {
                'in': {
                  transition: 'fadeIn',
                  priority: 1,
                },
                out: {
                  transition: 'fadeOut',
                  priority: 1,
                },
              },
            },
          },
        });


        $stateProvider.state('inicio', {
          url: '/inicio',
          views: {
            main: {
              templateUrl: 'example/inicio/vista/inicio.html',
              controller: 'InicioCtrl',
            },
          },
          data: {
            'gsapifyRouter.main': {
              enter: {
                'in': {
                  transition: 'fadeIn',
                  priority: 1,
                },
                out: {
                  transition: 'fadeOut',
                  priority: 1,
                },
              },
            },
          },
        });

        $stateProvider.state('soluciones', {
          url: '/soluciones',
          views: {
            main: {
              templateUrl: 'example/soluciones/vista/soluciones.html',
              controller: 'SolucionesCtrl',
            },
          },
          data: {
            'gsapifyRouter.main': {
              enter: {
                'in': {
                  transition: 'fadeIn',
                  priority: 1,
                },
                out: {
                  transition: 'fadeOut',
                  priority: 1,
                },
              },
            },
          },
        });
        $stateProvider.state('fabricantes', {
          url: '/fabricantes',
          views: {
            main: {
              templateUrl: 'example/fabricantes/vista/fabricantes.html',
              controller: 'FabricantesCtrl',
            },
          },
          data: {
            'gsapifyRouter.main': {
              enter: {
                'in': {
                  transition: 'fadeIn',
                  priority: 1,
                },
                out: {
                  transition: 'fadeOut',
                  priority: 1,
                },
              },
            },
          },
        });

        $stateProvider.state('contacto', {
          url: '/contacto',
          views: {
            main: {
              templateUrl: 'example/contacto/vista/contacto.html',
              controller: 'ContactoCtrl',
            },
          },
          data: {
            'gsapifyRouter.main': {
              enter: {
                'in': {
                  transition: 'fadeIn',
                  priority: 1,
                },
                out: {
                  transition: 'fadeOut',
                  priority: 1,
                },
              },
            },
          },
        });

        $stateProvider.state('clientes', {
          url: '/clientes',
          views: {
            main: {
              templateUrl: 'example/clientes/vista/clientes.html',
              controller: 'ClientesCtrl',
            },
          },
          data: {
            'gsapifyRouter.main': {
              enter: {
                'in': {
                  transition: 'fadeIn',
                  priority: 1,
                },
                out: {
                  transition: 'fadeOut',
                  priority: 1,
                },
              },
            },
          },
        });

        $stateProvider.state('catalogo', {
          url: '/catalogo',
          views: {
            main: {
              templateUrl: 'example/catalogo/vista/catalogo.html',
              controller: 'CatalogoCtrl',
            },
          },
          data: {
            'gsapifyRouter.main': {
              enter: {
                'in': {
                  transition: 'fadeIn',
                  priority: 1,
                },
                out: {
                  transition: 'fadeOut',
                  priority: 1,
                },
              },
            },
          },
        });


      },
    ]);

  angular.module('ElectroeliteApp').run(['$templateCache', function ($templateCache) {
    $templateCache.put('example/home.html', '<div class=\'wrapper\' style=\'background: #81B270\'><h1>Home</h1></div>');
    $templateCache.put('example/page1.html', '<div class=\'wrapper\' style=\'background: #FF7F40\'><h1>Page 1</h1></div>');
    $templateCache.put('example/page2.html', '<div class=\'wrapper\' style=\'background: #7F80B2\'><h1>Page 2</h1></div>');

  }]);

})();
