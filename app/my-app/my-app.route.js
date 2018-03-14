function myAppRoute($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/dashboard');
    $urlRouterProvider.when('/', '/dashboard');
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        component: 'dashboard'
      })
  };
  /* @ngInject */
  export default myAppRoute;
