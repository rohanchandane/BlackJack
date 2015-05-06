'use strict';

/**
 * @ngdoc service
 * @name blackjackApp.cards
 * @description
 * # cards
 * Service in the blackjackApp.
 */
angular.module('blackjackApp')
    .service('cardsModel', function (util) {
        this.cards = [
            {key: 'spadeAce', value:11, draw: false, style: 'ace-of-spades'},
            {key: 'spade2', value:2, draw: false, style: 'two-of-spades'},
            {key: 'spade3', value:3, draw: false, style: 'three-of-spades'},
            {key: 'spade4', value:4, draw: false, style: 'four-of-spades'},
            {key: 'spade5', value:5, draw: false, style: 'five-of-spades'},
            {key: 'spade6', value:6, draw: false, style: 'six-of-spades'},
            {key: 'spade7', value:7, draw: false, style: 'seven-of-spades'},
            {key: 'spade8', value:8, draw: false, style: 'eight-of-spades'},
            {key: 'spade9', value:9, draw: false, style: 'nine-of-spades'},
            {key: 'spade10', value:10, draw: false, style: 'ten-of-spades'},
            {key: 'spadeJack', value:10, draw: false, style: 'jack-of-spades'},
            {key: 'spadeQueen', value:10, draw: false, style: 'queen-of-spades'},
            {key: 'spadeKing', value:10, draw: false, style: 'king-of-spades'},
            {key: 'clubAce', value:11, draw: false, style: 'ace-of-clubs'},
            {key: 'club2', value:2, draw: false, style: 'two-of-clubs'},
            {key: 'club3', value:3, draw: false, style: 'three-of-clubs'},
            {key: 'club4', value:4, draw: false, style: 'four-of-clubs'},
            {key: 'club5', value:5, draw: false, style: 'five-of-clubs'},
            {key: 'club6', value:6, draw: false, style: 'six-of-clubs'},
            {key: 'club7', value:7, draw: false, style: 'seven-of-clubs'},
            {key: 'club8', value:8, draw: false, style: 'eight-of-clubs'},
            {key: 'club9', value:9, draw: false, style: 'nine-of-clubs'},
            {key: 'club10', value:10, draw: false, style: 'ten-of-clubs'},
            {key: 'clubJack', value:10, draw: false, style: 'jack-of-clubs'},
            {key: 'clubQueen', value:10, draw: false, style: 'queen-of-clubs'},
            {key: 'clubKing', value:10, draw: false, style: 'king-of-clubs'},
            {key: 'diamondAce', value:11, draw: false, style: 'ace-of-diamonds'},
            {key: 'diamond2', value:2, draw: false, style: 'two-of-diamonds'},
            {key: 'diamond3', value:3, draw: false, style: 'three-of-diamonds'},
            {key: 'diamond4', value:4, draw: false, style: 'four-of-diamonds'},
            {key: 'diamond5', value:5, draw: false, style: 'five-of-diamonds'},
            {key: 'diamond6', value:6, draw: false, style: 'six-of-diamonds'},
            {key: 'diamond7', value:7, draw: false, style: 'seven-of-diamonds'},
            {key: 'diamond8', value:8, draw: false, style: 'eight-of-diamonds'},
            {key: 'diamond9', value:9, draw: false, style: 'nine-of-diamonds'},
            {key: 'diamond10', value:10, draw: false, style: 'ten-of-diamonds'},
            {key: 'diamondJack', value:10, draw: false, style: 'jack-of-diamonds'},
            {key: 'diamondQueen', value:10, draw: false, style: 'queen-of-diamonds'},
            {key: 'diamondKing', value:10, draw: false, style: 'king-of-diamonds'},
            {key: 'heartAce', value:11, draw: false, style: 'ace-of-hearts'},
            {key: 'heart2', value:2, draw: false, style: 'two-of-hearts'},
            {key: 'heart3', value:3, draw: false, style: 'three-of-hearts'},
            {key: 'heart4', value:4, draw: false, style: 'four-of-hearts'},
            {key: 'heart5', value:5, draw: false, style: 'five-of-hearts'},
            {key: 'heart6', value:6, draw: false, style: 'six-of-hearts'},
            {key: 'heart7', value:7, draw: false, style: 'seven-of-hearts'},
            {key: 'heart8', value:8, draw: false, style: 'eight-of-hearts'},
            {key: 'heart9', value:9, draw: false, style: 'nine-of-hearts'},
            {key: 'heart10', value:10, draw: false, style: 'ten-of-hearts'},
            {key: 'heartJack', value:10, draw: false, style: 'jack-of-hearts'},
            {key: 'heartQueen', value:10, draw: false, style: 'queen-of-hearts'},
            {key: 'heartKing', value:10, draw: false, style: 'king-of-hearts'}
        ];

        this.pickRandomCard = function () {
            var card = this.cards[util.getRandomNumber(this.cards)];

            if(card.draw) {
                this.pickRandomCard();
            }

            var cardIndex = this.cards.indexOf(card);
            if (cardIndex > -1) {
                this.cards[cardIndex].draw = true;
            }

            return card;
        };

        this.reset = function () {
            angular.forEach(this.cards, function (key) {
                key.draw = false;
            });
        };
    });
