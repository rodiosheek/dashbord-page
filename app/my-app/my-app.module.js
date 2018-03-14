import angular from 'angular';
import routing from './my-app.route';

//components
import header from './header/header.module';
import dashboard from './dashboard/dashboard.module';
import dashboardCardComponent from './dashboard-card/dashboard-card.component';

/* @ngInject */
angular
  .module('myApp', [
    'myApp.header',
    'myApp.dashboard'
  ])
  .component('dashboardCard', dashboardCardComponent)
  .config(routing);
