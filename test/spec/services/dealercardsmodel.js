'use strict';

describe('Service: dealercardsmodel', function () {

  // load the service's module
  beforeEach(module('blackjackApp'));

  // instantiate service
  var dealercardsmodel;
  beforeEach(inject(function (_dealercardsmodel_) {
    dealercardsmodel = _dealercardsmodel_;
  }));

  it('should do something', function () {
    expect(!!dealercardsmodel).toBe(true);
  });

});
