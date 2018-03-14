import angular from 'angular';
import routing from './my-app.route';

//components
import header from './header/header.module';
import dashboard from './dashboard/dashboard.module';

/* @ngInject */
angular
  .module('myApp', [
    'myApp.header',
    'myApp.dashboard'
  ])
  .config(routing);
