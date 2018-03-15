import campaigns from './campaigns.component';
import campaignsService from './campaigns.service';
import socialNetFilterComponent from './social-network-filter/social-network-filter.component';

require('./campaigns.component.scss');

angular
    .module('myApp.campaigns', [ 'ngMaterial' ])
    .component('campaigns', campaigns)
    .component('socialFilter', socialNetFilterComponent)
    .factory('campaignsService', campaignsService);
