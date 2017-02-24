(function () {
//    'use strict';
    //Controller
    angular.module("AppModule")
            .controller("InvoiceController", function ($scope) {

                //data models 
                $scope.model = {};
                $scope.model.selectItem = {};

                //ui models
                $scope.ui = {};

                //current ui mode IDEAL, SELECTED, NEW, EDIT
                $scope.ui.mode = null;


                $scope.ui.init = function () {
                    //set ideal mode
                    $scope.ui.mode = "IDEAL";
                    $scope.ui.formName = "Invoice";
                    console.log($scope.ui.mode);
                };
                $scope.ui.itemCartList = [
                    {
                        indexNo: 1,
                        image: "../../../images/computer1.jpg",
                        itemDescription: "HP LAPTOP kingston 2GB Ram TB1",
                        warranty: false,
                        discount: true,
                        qty: 2,
                        unitPrice: "34000.00",
                        discountValue: "8000.00",
                        value: "60000.00"
                    },
                    {
                        indexNo: 2,
                        image: "../../../images/computer2.jpg",
                        itemDescription: "SINGER LAPTOP GB4 TB1 ",
                        warranty: true,
                        discount: true,
                        qty: 1,
                        unitPrice: "86000.00",
                        discountValue: "3000.00",
                        value: "83000.00"
                    },
                    {
                        indexNo: 1,
                        image: "../../../images/computer3.jpg",
                        itemDescription: "DELL DESKTOP GB8 TB2 ",
                        warranty: false,
                        discount: false,
                        qty: 10,
                        unitPrice: "90000.00",
                        discountValue: "10000.00",
                        value: "890000.00"
                    }
                    ,
                    {
                        indexNo: 1,
                        image: "../../../images/computer3.jpg",
                        itemDescription: "DELL DESKTOP GB8 TB2 ",
                        warranty: false,
                        discount: false,
                        qty: 10,
                        unitPrice: "90000.00",
                        discountValue: "10000.00",
                        value: "890000.00"
                    }
                ];
                $scope.ui.searchItems = [
                    {
                        indexNo: 1,
                        itemCategoryName: "Assembly Item",
                        itemList: [
                            {
                                indexNo: 9,
                                barcode: "1234567",
                                image: "../../../images/computer3.jpg",
                                itemDescription: "DELL DESKTOP GB8 TB2 1 ",
                                unitPrice: "90000.00",
                                warranty: false,
                                discount: true,
                                itemType: 'assembly',
                                itemDepartment:"computer",
                                itemCategory:"CPU"
                                
                            },
                            {
                                indexNo: 4,
                                barcode: "111111",
                                image: "../../../images/computer2.jpg",
                                itemDescription: "HP DESKTOP GB8 TB2 232 ",
                                unitPrice: "80000.00",
                                warranty: true,
                                discount: true,
                                itemType: 'assembly',
                                itemDepartment:"computer",
                                itemCategory:"CPU"
                            }
                        ]
                    }
                    ,
                    {
                        indexNo: 1,
                        itemCategoryName: "Serial Item",
                        itemList: [{
                                indexNo: 9,
                                barcode: "2222222",
                                image: "../../../images/computer3.jpg",
                                itemDescription: "OPPO Mobile Phone",
                                unitPrice: "50000.00",
                                warranty: false,
                                discount: true,
                                itemType: 'serial',
                                itemDepartment:"Mobile",
                                itemCategory:"Oppo a37f"
                            }]
                    }
                    ,
                    {
                        indexNo: 5,
                        itemCategoryName: "Assembly Item",
                        itemList: [{
                                indexNo: 10,
                                barcode: "8080",
                                image: "../../../images/computer4.jpg",
                                itemDescription: "HP desktop brand new ",
                                unitPrice: "4000.00",
                                warranty: true,
                                discount: false,
                                itemType: 'Assembly',
                                itemDepartment:"computer",
                                itemCategory:"CPU"
                            }]
                    }
                    ,
                    {
                        indexNo: 1,
                        itemCategoryName: "General Item",
                        itemList: [{
                                indexNo: 9,
                                barcode: "ppppppp",
                                image: "../../../images/computer3.jpg",
                                itemDescription: "Kingston 4GB RAM",
                                unitPrice: "90000.00",
                                warranty: false,
                                discount: false,
                                itemType: 'general',
                                itemDepartment:"computer part",
                                itemCategory:"RAM"
                            }]
                    }
                    ,
                    {
                        indexNo: 1,
                        itemCategoryName: "Service Item",
                        itemList: [{
                                indexNo: 9,
                                barcode: "aaaaaaa",
                                image: "../../../images/computer3.jpg",
                                itemDescription: "Computer Repair Charges",
                                unitPrice: "90000.00",
                                warranty: false,
                                discount: true,
                                itemType: 'service',
                                itemDepartment:"service",
                                itemCategory:"repair charges"
                            }]
                    }
                ];
                $scope.model.serialItemList = [
                    {serial: '000'},
                    {serial: '777'},
                    {serial: '666'},
                    {serial: '123'}
                ];
                $scope.ui.setModalValue = function (category, subItem) {
                    console.log(category);
                    console.log(subItem);
                    $scope.model.selectItem.categoryName = category.itemCategoryName;
                    $scope.model.selectItem.subItem = subItem;
//                    console.log($scope.model.selectItem);
                };
                $scope.ui.addCart=function(selectItem){
                    console.log('selectItem');
                    console.log(selectItem);
                    var cartItem={};
//                    cartItem.indexNo= 1,
                        cartItem.image= selectItem.subItem.image,
                        cartItem.itemDescription= selectItem.subItem.itemDescription,
                        cartItem.warranty=selectItem.subItem.warranty,
                        cartItem.discount= selectItem.subItem.discount,
                        cartItem.qty= selectItem.subItem.qty,
                        cartItem.unitPrice= selectItem.subItem.unitPrice,
                        cartItem.discountValue= selectItem.subItem.discountValue,
                        cartItem.value=(selectItem.subItem.qty*selectItem.subItem.unitPrice)-selectItem.subItem.discountValue;
                
                    $scope.ui.itemCartList.unshift(cartItem); 
                    
                };

                $scope.ui.init();
            });
}());