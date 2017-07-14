/**
 * Created by Administrator on 2017/7/7.
 */
/*angular模块部分*/
var app=angular.module('addPayApp',[]);
app.controller("addPayCtrl",function($scope,$http){
    $scope.tools={
        //获得url中的get参数
        //name 需要获得参数的名称
        GetQueryString:function(name){
          var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
          var r = window.location.search.substr(1).match(reg);
          if (r!=null)return decodeURIComponent(r[2]); 
          return null;
        }
    };
    $scope.state={};
    $scope.dictionary={
        contractState:contractState,
        bankData:bankData
    };
    
    $scope.dataModel={
       addPay:{
           num:"",
           contractNum:"",
           state:0
       },
        payed:[
            {
                payTime:"",
                payMoney:"",
                payNum:""
            }
        ],
        payedAnother:{
            payDate:"",
            payMoney:"",
            bankStream:"",
            receiveDate:""
        },
        readyOnlyData: {
            createTime: "",
            creator: "",
            lastChangeTime: "",
            lastPeo: "",
            bank: "",
            money: "",
            waitMoney: "",
            location: ""
        },
        partyInfo: {
            recPeo: "",
            banNum: "",
            openBank: 0,
            payPeo: "",
            payBankNum: "",
            payOpenBank: 0,
            remark:""
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
            alert("复核成功!");
        }

    };





    console.log(storage.getStorage('fkDataSingle'));
    $scope.dataModel = storage.getStorage('fkDataSingle');
    if(storage.getStorage('fkDataSingle')){
        $scope.dataModel.addPay.state = 2;
    }

    
});