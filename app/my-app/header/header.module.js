import headerComponent from './header.component';


require('./header.component.scss');

angular
    .module('myApp.header', ['ngMaterial'])
    .component('appHeader', headerComponent);
