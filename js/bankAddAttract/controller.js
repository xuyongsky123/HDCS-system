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
        save:function(){

            var _tmp = [];
            
            if(storage.getStorage('htData')){

                if(storage.getStorage('htData').length){
                    console.log('有数据');
                    _tmp = storage.getStorage('htData');
                    _tmp.push($scope.dataModel);
                }else{
                    console.log('无数据');
                    _tmp.push($scope.dataModel);
                }
            }else{
                console.log('无数据');
                _tmp.push($scope.dataModel);
            }
            
            storage.setStorage('htData',_tmp);

            window.location.href='bankManage.html';
        },
        cancel:function(){
            window.location.reload();
        }
    };



    /*从本地拿数据*/
    var _obtain = storage.getStorage('wqslData');
    if(_obtain){
        console.log('有数据');
        console.log(_obtain);

        //处理字段名不同
        var _array = [];
        for(var i=0;i<_obtain.dealInfo.payInfo.length;i++){
            var _tt = {
                payMoney:_obtain.dealInfo.payInfo[i].price,
                payTime:_obtain.dealInfo.payInfo[i].time
            };
            _array.push(_tt);
        }

        $scope.dataModel.data_addAttr = {
            'attrNum':_obtain.code,
            'bank':0,
            'state':0,
            'attrTotal':_obtain.dealInfo.houseTotalMoney,
            'supMoney':_obtain.dealInfo.lookMoney,
            'payMethod':_array,
            'location':''
        };
        $scope.dataModel.data_payMoney=[
            {
                "payTime":"",
                "payMoney":"",
                "payNum":""
            }
        ];
        $scope.dataModel.readOnly={
            "createTime":new Date(),
            "creator":"管理员",
            "auditor":"管理员1",
            "endTime":_obtain.siteTime,
            "endPeo":"管理员",
            "checkTime":_obtain.decisionTime
        };
        $scope.dataModel.sellerInfo={
            "name":_obtain.sellerInfo[0].name,
            "phone":_obtain.sellerInfo[0].phone,
            "bankName":0,
            "bankNum":"",
            "receiver":"",
            "houseNum":_obtain.houseInfo.rightNum,
            "identityCard":_obtain.sellerInfo[0].identity
        };
        $scope.dataModel.buyerInfo={
            "name":_obtain.buyerInfo[0].name,
            "phone":_obtain.buyerInfo[0].phone,
            "bankName":0,
            "bankNum":"",
            "recPeo":"",
            "identityCard":_obtain.sellerInfo[0].identity
        };
        $scope.dataModel.contractText={
            "textarea":_obtain.contractInfo.otherMsg
        }
        
    }else{
        console.log('无数据');
    }
});