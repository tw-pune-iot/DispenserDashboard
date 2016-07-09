'use strict';

describe('dispenser.version module', function() {
  beforeEach(module('dispenser.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
