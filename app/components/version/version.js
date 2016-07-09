'use strict';

angular.module('dispenser.version', [
  'dispenser.version.interpolate-filter',
  'dispenser.version.version-directive'
])

.value('version', '0.1');
