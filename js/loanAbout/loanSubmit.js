/**
 * Created by Administrator on 2017/7/7.
 */
/*angular模块部分*/
var app=angular.module('loanSubmitApp',[]);
app.controller("loanSubmitCtrl",function($scope,$http){
    $scope.tools={};
    $scope.state={};
    $scope.dictionary={
        identity:identity,
        bankData:bankData
    };
    $scope.dataModel={
        houseInfo:{
            obligeeName:"程红",
            obligeeName2:"程红红",
            identityType:"居民身份证",
            identityNum:"522424199108075008",
            houseNum:"201708060003",
            houseArea:"89.9",
            insideArea:"86.9",
            outsideArea:"2.8",
            totalLayer:"17",
            layer:"2",
            houseLocation:"乌鲁木齐市水磨沟区"
        },
        bankInfo:{
            applyBank:0,
            applyMoney:""
        }
    };
    $scope.ui={
        submit:function(){
            window.location.href="loanCheck.html";
        }

    };
    /*实际付款数据模拟*/
    $http.post('data/bankAddContract.json').then(function(data){
        $scope.dataModel.readOnly=data.data;
    },function(){

    });
});