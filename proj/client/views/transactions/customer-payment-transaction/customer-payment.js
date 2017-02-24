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
                    $scope.ui.formName = "CustomerPayment";
                    console.log($scope.ui.mode);
                };

                $scope.model.customerList = [
                    {
                        indexNo: 1,
                        name: "kasun chamara",
                        address: "walana panadura",
                        mobile: "01122323332",
                        nic: "908763533V"
                    },
                    {
                        indexNo: 2,
                        name: "nidura prageeth",
                        address: "panadura",
                        mobile: "01122323332",
                        nic: "908763533V"
                    },
                    {
                        indexNo: 3,
                        name: "mohan jayamuni",
                        address: "walana",
                        mobile: "01122323332",
                        nic: "908763533V"
                    },
                    {
                        indexNo: 4,
                        name: "kavish manjitha",
                        address: "nugegoda",
                        mobile: "01122323332",
                        nic: "908763533V"
                    },
                    {
                        indexNo: 5,
                        name: "oshada malli",
                        address: "horana",
                        mobile: "01122323332",
                        nic: "908763533V"
                    }
                ];

                $scope.ui.init();
            });
}());