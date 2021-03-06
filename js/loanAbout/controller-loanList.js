/**
 * Created by Administrator on 2017/7/7.
 */
/*angular模块部分*/
var app=angular.module('preContractDealApp',[]);
app.controller("preContractDealCtrl",function($scope,$http){
    $scope.tools={};
    $scope.state={};
    $scope.dictionary={
        identity:identity,
        bankData:bankData
    };
    $scope.dataModel={
        userInfo:{
            num:"",
            phone:"",
            identity:0,
            earning:"",
            identityNum:"",
            fundNum:"",
            workUnit:"",
            contact:""
        },
        bankInfo:{
            applyBank:"",
            applyMoney:""
        },
        houseInfo:{
            code:"2017房验第00002447号",
            obligeeName:"程红",
            identityType:0,
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
    };
});