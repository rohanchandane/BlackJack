'use strict';

describe('Service: playercardsmodel', function () {

  // load the service's module
  beforeEach(module('blackjackApp'));

  // instantiate service
  var playercardsmodel;
  beforeEach(inject(function (_playercardsmodel_) {
    playercardsmodel = _playercardsmodel_;
  }));

  it('should do something', function () {
    expect(!!playercardsmodel).toBe(true);
  });

});
