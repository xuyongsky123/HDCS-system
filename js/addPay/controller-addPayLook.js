/**
 * Created by Administrator on 2017/7/7.
 */
/*angular模块部分*/
var app=angular.module('addPayApp',[]);
app.controller("addPayCtrl",function($scope,$http){
    $scope.tools={};
    $scope.state={};
    $scope.dictionary={
        contractState:contractState,
        bankData:bankData
    };
    $scope.dataModel={
       addPay:{
           num:"201708090001",
           contractNum:"201705060003",
           state:1
       },
        payed:{
            payTime:"2017-06-08",
            payMoney:"1,000,000",
            payNum:"201709080003"
        },
        payedAnother:{
            payDate:"2019-05-06",
            payMoney:"1,000,000",
            bankStream:"123456789",
            receiveDate:"2017-05-18"
        },
        readyOnlyData: {
            createTime: "2017-08-09",
            creator: "管理员",
            lastChangeTime: "2017-08-10",
            lastPeo: "管理员",
            bank: "中国银行",
            money: "1,000,000",
            waitMoney: "1,000,000",
            location: "乌鲁木齐市水磨沟区"
        },
        partyInfo: {
            recPeo: "程程",
            banNum: "201703050003",
            openBank: 0,
            payPeo: "张兵",
            payBankNum: "201807090006",
            payOpenBank: 0,
            remark:"测试文字"
        }

    };
    $scope.ui={
        cancel:function(){
            window.location.reload();
        },
        save:function(){
            window.location.href="payManage.html";
        },
        check:function(){
            window.location.href='addPayCheck.html';
        }

    };
    /*实际付款数据模拟*/
    $http.post('data/bankAddContract.json').then(function(data){
        $scope.dataModel.readOnly=data.data;
    },function(){

    });
});