(function () {
    'use strict';
    //Controller
    angular.module("AppModule")
            .controller("CustomerPaymentController", function ($scope) {

                //data models 
                $scope.model = {};

                //ui models
                $scope.ui = {};

                //current ui mode IDEAL, SELECTED, NEW, EDIT
                $scope.ui.mode = null;


                $scope.ui.init = function () {
                    //set ideal mode
                    $scope.ui.mode = "IDEAL";
                    $scope.ui.formName= "CustomerPayment";
                    console.log($scope.ui.mode);
                };

                $scope.ui.init();
            });
}());