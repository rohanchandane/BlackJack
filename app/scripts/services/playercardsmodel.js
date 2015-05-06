'use strict';

/**
 * @ngdoc service
 * @name blackjackApp.playercardsmodel
 * @description
 * # playercardsmodel
 * Service in the blackjackApp.
 */
angular.module('blackjackApp')
    .service('playerCardsModel', function () {
        this.playerCards = [];

        this.reset = function () {
            this.playerCards = [];
        };

        this.add = function (card) {
            this.playerCards.push(card);
        };

        this.getCards = function () {
            return this.playerCards;
        };
    });
