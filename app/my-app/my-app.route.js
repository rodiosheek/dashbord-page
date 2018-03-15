function myAppRoute($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/dashboard');
    $urlRouterProvider.when('/', '/dashboard');
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        component: 'dashboard'
      })
      .state('campaigns', {
        url: '/campaigns/:id',
        component: 'campaigns'
      })
  };
  /* @ngInject */
  export default myAppRoute;
