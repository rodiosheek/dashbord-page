import dashboard from './dashboard.component';


require('./dashboard.component.scss');

angular
    .module('myApp.dashboard', ['ngMaterial'])
    .component('dashboard', dashboard);
