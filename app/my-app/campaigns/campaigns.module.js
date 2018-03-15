import campaigns from './campaigns.component';
import campaignsService from './campaigns.service';


require('./campaigns.component.scss');

angular
    .module('myApp.campaigns', ['ngMaterial'])
    .component('campaigns', campaigns)
    .factory('campaignsService', campaignsService);
