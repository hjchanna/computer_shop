(function () {
    angular.module("AppModule")
            .config(function ($routeProvider) {
                $routeProvider
                        
                    //  master
                        .when("/master/customer", {
                            templateUrl: "app/master/customer/customer.html",
                            controller: "CustomerController"
                        })
//                        .when("/master/item", {
//                            templateUrl: "app/master/item/item.html",
//                            controller: "ItemController"
//                        })
//                        .when("/master/supplier", {
//                            templateUrl: "app/master/supplier/supplier.html",
//                            controller: "SupplierController"
//                        })
                    //  Transaction
                        .when("/transaction/invoice", {
                            templateUrl: "app/transaction/invoice/invoice.html",
                            controller: "InvoiceController"
                        })
//                        .when("/transaction/grn", {
//                            templateUrl: "app/transaction/grn/grn.html",
//                            controller: "GrnController"
//                        })
                       
                         .when("/transaction/customer-payment", {
                            templateUrl: "app/transaction/customer-payment/customer-payment.html",
                            controller: "CustomerPaymentController"
                        })

                        .otherwise({
                            redirectTo: "/"
                        });
            });
}());