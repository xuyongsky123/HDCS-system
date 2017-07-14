/**
 * Created by Administrator on 2017/7/7.
 */
/*angular模块部分*/
var app=angular.module('bandAddModuleApp',[]);
app.controller("bandAddCtrl",function($scope,$http){

    $scope.tools={};
    $scope.state={};
    $scope.dictionary={
        contractState:contractState,
        bankData:bankData
    };
    $scope.dataModel={
        data_addAttr:{
            'attrNum':'',
            'bank':0,
            'state':0,
            'attrTotal':'',
            'supMoney':'',
            'payMethod':[
                {
                    'payTime':'',
                    'payMoney':'',
                }
            ],
            'location':''
        },
        data_payMoney:[
            {
                "payTime":"",
                "payMoney":"",
                "payNum":""
            }
        ],
        readOnly:{
            "createTime":"111",
            "creator":" ",
            "auditor":" ",
            "endTime":" ",
            "endPeo":" ",
            "checkTime":" "
        },
        sellerInfo:{
            "name":"",
            "phone":"",
            "bankName":0,
            "bankNum":"",
            "receiver":"",
            "houseNum":"",
            "identityCard":""
        },
        buyerInfo:{
            "name":"",
            "phone":"",
            "bankName":0,
            "bankNum":"",
            "recPeo":"",
            "identityCard":""
        },
        contractText:{
            "textarea":""
        }
    };
    $scope.ui={
        addPayMoney:function(){
            $scope.dataModel.data_payMoney.push({
                payTime:"",
                payMoney:"",
                payNum:""
            });
        },
        receiveLoan:function(){
            alert("即将跳转至银行请求放款页面");
        },
        drawbackLoan:function(){
            alert("即将跳转至银行请求退款页面");
        },
        cancel:function(){
            window.location.href="tip.html";
        }
    };



    $scope.dataModel = storage.getStorage('htDataSingle');
    if(storage.getStorage('htDataSingle')){
        $scope.dataModel.data_addAttr.state = 2;
    }
    


});






