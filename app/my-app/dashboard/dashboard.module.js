import dashboard from './dashboard.component';
import dashboardService from './dashboard.service';
import dashboardCardComponent from './dashboard-card/dashboard-card.component';
import dashboardCardItemComponent from './dashboard-card-item/dashboard-card-item.component';


require('./dashboard.component.scss');

angular
    .module('myApp.dashboard', ['ngMaterial'])
    .component('dashboard', dashboard)
    .component('dashboardCard', dashboardCardComponent)
    .component('cardItem', dashboardCardItemComponent)
    .factory('dashboardService', dashboardService);
