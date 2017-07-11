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
            'attrNum':'201708090001',
            'bank':0,
            'state':2,
            'attrTotal':'1,000,000',
            'supMoney':'2,000,000',
            'payTime':'2017-07-06',
            'payMoney':'2,000,000',
            'location':'上海市徐汇区漕溪北路222号'
        },
        data_payMoney:{
            "payTime":"2017-02-05",
            "payMoney":"4,000,000",
            "payNum":"201707080004"
        },
        readOnly:{
            "createTime":"",
            "creator":" ",
            "auditor":" ",
            "endTime":" ",
            "endPeo":" ",
            "checkTime":" "
        },
        sellerInfo:{
            "name":"张三",
            "phone":"18817878765",
            "bankName":"中国银行",
            "bankNum":"6214000000009876",
            "receiver":"李四",
            "houseNum":"20170807999",
            "identityCard":"522424199403063880"
        },
        buyerInfo:{
            "name":"赵四",
            "phone":"18817828965",
            "bankName":"招商银行",
            "bankNum":"6214000000003556",
            "recPeo":"张三三",
            "identityCard":"522424199403060089"
        },
        contractText:{
            "textarea":"测试文字"
        }
    };
    $scope.ui={
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






