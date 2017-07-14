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
            var _tmp = [];
            
            if(storage.getStorage('fkData')){

                if(storage.getStorage('fkData').length){
                    console.log('有数据');
                    _tmp = storage.getStorage('fkData');
                    _tmp.push($scope.dataModel);
                }else{
                    console.log('无数据');
                    _tmp.push($scope.dataModel);
                }
            }else{
                console.log('无数据');
                _tmp.push($scope.dataModel);
            }
            
            storage.setStorage('fkData',_tmp);

            window.location.href="payManage.html";
        }

    };
    

    //数据模拟链接
    if(storage.getStorage('htDataSingle')){
        var _htDataSingle = storage.getStorage('htDataSingle');

        $scope.dataModel.payed=_htDataSingle.data_payMoney;
        $scope.dataModel.readyOnlyData={
            createTime:_htDataSingle.readOnly.createTime,
            creator:_htDataSingle.readOnly.creator,
            lastChangeTime:_htDataSingle.readOnly.endTime,
            lastPeo:_htDataSingle.readOnly.endPeo,
            bank:bankData[_htDataSingle.data_addAttr.bank].value,
            money:_htDataSingle.data_addAttr.supMoney,
            waitMoney:_htDataSingle.data_addAttr.attrTotal,
            location:_htDataSingle.data_addAttr.location
        }
    }
});









