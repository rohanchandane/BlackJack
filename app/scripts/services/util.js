'use strict';

/**
 * @ngdoc service
 * @name blackjackApp.util
 * @description
 * # util
 * Service in the blackjackApp.
 */
angular.module('blackjackApp')
    .factory('util', function () {
        return {
            findAce: function (cards) {
                for (var i = 0; i < cards.length; i++) {
                    if (cards[i].value === 11) {
                        return cards[i];
                    }
                }
            },

            getCardTotal : function(cards) {
                var total = 0;
                for (var i = 0; i < cards.length; i++ ){
                    total = total + cards[i].value;
                }

                return total;
            },

            getRandomNumber : function (arr) {
                return Math.floor(Math.random() * arr.length)
            }
        }
    });
