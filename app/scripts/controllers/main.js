'use strict';

/**
 * @ngdoc function
 * @name blackjackApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blackjackApp
 */
angular.module('blackjackApp')
    .controller('MainCtrl', function ($scope, util, cardsModel, playerCardsModel, dealerCardsModel) {

        $scope.distributeInitialCards = function () {
            $scope.setCardForPlayer();
            $scope.setCardForDealer();
        };

        $scope.setCardForPlayer = function () {
            playerCardsModel.add(cardsModel.pickRandomCard());
            playerCardsModel.add(cardsModel.pickRandomCard());
        };

        $scope.setCardForDealer = function () {
            dealerCardsModel.add(cardsModel.pickRandomCard());
        };

        $scope.drawCardForPlayer = function () {
            playerCardsModel.add(cardsModel.pickRandomCard());

            var cardTotal = util.getCardTotal(playerCardsModel.getCards());

            if(cardTotal === 21) {
                $scope.winnerName = 'You';
            } else if(cardTotal > 21){
                var aceCard = util.findAce(playerCardsModel.getCards());
                if(aceCard) {
                    var aceIndex = playerCardsModel.getCards().indexOf(aceCard);
                    playerCardsModel.getCards()[aceIndex].value = 1;

                    var newTotal = util.getCardTotal(playerCardsModel.getCards());

                    if(newTotal === 21){
                        $scope.winnerName = 'You';
                    }

                } else {
                    $scope.winnerName = 'Dealer';
                }
            }
        };

        $scope.drawCardForDealer = function () {
            var cardTotalForDealer = util.getCardTotal(dealerCardsModel.getCards());
            var cardTotalForPlayer = util.getCardTotal(playerCardsModel.getCards());

            if(cardTotalForDealer > 21) {

                var aceCard = util.findAce(dealerCardsModel.getCards());
                if(aceCard) {
                    var aceIndex = dealerCardsModel.getCards().indexOf(aceCard);
                    dealerCardsModel.getCards()[aceIndex].value = 1;

                    var newTotal = util.getCardTotal(dealerCardsModel.getCards());

                    if(newTotal === 21){
                        $scope.winnerName = 'Dealer';
                    } else {
                        $scope.drawCardForDealer();
                    }

                } else {
                    $scope.winnerName = 'You';
                }

            } else if(cardTotalForDealer === 21) {
                $scope.winnerName = 'Dealer';
            } else {
                if( cardTotalForDealer > cardTotalForPlayer ){
                    $scope.winnerName = 'Dealer';
                } else {
                    // picking new card condition for dealer
                    dealerCardsModel.add(cardsModel.pickRandomCard());
                    $scope.drawCardForDealer();
                }
            }

        };

        /* form function */
        $scope.startDeal = function () {
            $scope.isDealOn = true;

            $scope.distributeInitialCards();
            $scope.playerCards = playerCardsModel.getCards();
            $scope.dealerCards = dealerCardsModel.getCards();

            var cardTotalForDealer = util.getCardTotal(dealerCardsModel.getCards());
            var cardTotalForPlayer = util.getCardTotal(playerCardsModel.getCards());

            //assumption: preference for player to win this game
            if( cardTotalForPlayer === 21) {
                $scope.winnerName = 'You';
            } else if( cardTotalForDealer === 21) {
                $scope.winnerName = 'Dealer';
            }
        };

        /* initialization */
        $scope.init = function () {
            cardsModel.reset();

            $scope.playerCards = [];
            playerCardsModel.reset();

            $scope.dealerCards = [];
            dealerCardsModel.reset();

            $scope.winnerName = '';
            $scope.isDealOn = false;
        };

        $scope.init();

    });
