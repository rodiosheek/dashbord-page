import angular from 'angular';
import routing from './my-app.route';

//components
import header from './header/header.module';
import dashboard from './dashboard/dashboard.module';
import dashboardCardComponent from './dashboard-card/dashboard-card.component';
import dashboardCardItemComponent from './dashboard-card-item/dashboard-card-item.component';
import campaigns from './campaigns/campaigns.module';
/* @ngInject */
angular
  .module('myApp', [
    'myApp.header',
    'myApp.dashboard',
    'myApp.campaigns'
  ])
  .component('dashboardCard', dashboardCardComponent)
  .component('cardItem', dashboardCardItemComponent)
  .config(routing);
