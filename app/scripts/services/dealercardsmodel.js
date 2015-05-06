'use strict';

/**
 * @ngdoc service
 * @name blackjackApp.dealercardsmodel
 * @description
 * # dealercardsmodel
 * Service in the blackjackApp.
 */
angular.module('blackjackApp')
    .service('dealerCardsModel', function () {
        this.dealerCards = [];

        this.reset = function () {
            this.dealerCards = [];
        };

        this.add = function (card) {
            this.dealerCards.push(card);
        };

        this.getCards = function () {
            return this.dealerCards;
        };
    });
