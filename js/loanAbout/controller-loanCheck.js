/**
 * Created by Administrator on 2017/7/7.
 */
/*angular模块部分*/
var app=angular.module('loanCheckApp',[]);
app.controller("loanCheckCtrl",function($scope,$http){
    $scope.tools={};
    $scope.state={};
    $scope.dictionary={
        identity:identity,
        bankData:bankData
    };
    $scope.dataModel={
        userInfo:{
            name:"雪米",
            phone:"18817828965",
            identity:"居民身份证",
            earning:"1,000",
            identityNum:"522424199809087669",
            fundNum:"201709080006",
            workUnit:"宏达昌盛实业有限公司",
            contact:"乌鲁木齐市水磨沟区"
        },
        bankInfo:{
            applyBank:"中国银行",
            applyMoney:"1,000,000"
        },
        houseInfo:{
            obligeeName1:"程红",
            obligeeName2:"程红",
            identityType:"居民身份证",
            identityNum:"522424199108075008",
            houseNum:"201708060003",
            houseArea:"89.9",
            insideArea:"86.9",
            outsideArea:"2.8",
            totalLayer:"17",
            layer:"2",
            houseLocation:"乌鲁木齐市水磨沟区"
        }
    };
    $scope.ui={
        loanCheck:function(){
            window.location.href="loanCheck.html";
        }
    };
    /*实际付款数据模拟*/
    $http.post('data/bankAddContract.json').then(function(data){
        $scope.dataModel.readOnly=data.data;
    },function(){

    });
});