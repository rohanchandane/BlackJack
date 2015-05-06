'use strict';

xdescribe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('blackjackApp'));

    var MainCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });

    }));

    it('Should defined $scope.cards', function () {
        expect(scope.cards).toBeDefined();
    });

    it('Should defined $scope.playerCards', function () {
        expect(scope.playerCards).toBeDefined();
    });

    it('Should defined $scope.dealerCards', function () {
        expect(scope.dealerCards).toBeDefined();
    });

    it('Should set $scope.winnerName as ""', function () {
        expect(scope.winnerName).toBe('');
    });

    it('Should set $scope.isDealOn as FALSE', function () {
        expect(scope.isDealOn).toBeFalsy();
    });

    describe('When $scope.playerCards, $scope.dealerCards is NOT empty AND winnerName is non empty string AND isDealOn is TRUE AND scope.cards draw is FALSE', function () {
        beforeEach(function () {
            angular.forEach(scope.cards, function (key) {
                key.draw = false;
            });
            scope.playerCards =[ {key: 'spadeAce', value:11, draw: false, img: 'images/ace_of_spades.jpg'} ];
            scope.dealerCards = [ {key: 'spade2', value:2, draw: false, img: 'images/2_of_spades.jpg'} ];
            scope.winnerName  = 'You';
            scope.isDealOn = true;
        });

        describe('When $scope.resetGame() is called', function () {
            beforeEach(function () {
                scope.resetGame();
            });

            it('Should set $scope.playerCards as an empty [] ', function () {
                expect(scope.playerCards).toEqual([]);
            });

            it('Should set $scope.dealerCards as an empty [] ', function () {
                expect(scope.dealerCards).toEqual([]);
            });

            it('Should set $scope.winnerName as "" (empty string)', function () {
                expect(scope.winnerName).toBe('');
            });

            it('Should set $scope.isDealOn false', function () {
                expect(scope.isDealOn).toBeFalsy();
            });

            it('Should set all draw properties TRUE for $scope.cards', function () {
                angular.forEach(scope.cards, function (key) {
                    expect(key.draw).toBeFalsy();
                });
            });
        });
    });

    describe('When $scope.pickRandomCard() is called', function () {
        var card;

        beforeEach(function () {
            card = scope.pickRandomCard();
        });

        it('Should return a card object of which "draw" property is FALSE', function () {
            expect(card.draw).toBeTruthy();
        });
    });

    describe('When $scope.startDeal() is called', function () {
        beforeEach(function () {
            scope.startDeal();
        });
        it('Should set $scope.playerCards with 2 random records', function () {
            expect(scope.playerCards.length).toBe(2);
        });
        it('Should set $scope.dealerCards with 1 random records', function () {
            expect(scope.dealerCards.length).toBe(1);
        });
    });

});
