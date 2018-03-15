import angular from 'angular';
import routing from './my-app.route';

//components
import header from './header/header.module';
import dashboard from './dashboard/dashboard.module';
import campaigns from './campaigns/campaigns.module';
/* @ngInject */
angular
  .module('myApp', [
    'myApp.header',
    'myApp.dashboard',
    'myApp.campaigns'
  ])
  .config(routing);
