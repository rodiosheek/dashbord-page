import angular from 'angular';
import uirouter from 'angular-ui-router';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMessages from 'angular-messages';
import ngMaterial from 'angular-material';


import myApp from './my-app/my-app.module';

require('../node_modules/angular-material/angular-material.scss')

require('./main.scss');

angular.module('app', [
  uirouter,
  ngMaterial,
  'myApp'
]);
