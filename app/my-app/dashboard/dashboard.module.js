import dashboard from './dashboard.component';
import dashboardService from './dashboard.service';


require('./dashboard.component.scss');

angular
    .module('myApp.dashboard', ['ngMaterial'])
    .component('dashboard', dashboard)
    .factory('dashboardService', dashboardService);
