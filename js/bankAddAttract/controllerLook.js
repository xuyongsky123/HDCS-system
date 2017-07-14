/**
 * Created by Administrator on 2017/7/7.
 */
/*angular模块部分*/
var app=angular.module('bandAddModuleApp',[]);
app.controller("bandAddCtrl",function($scope,$http){

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

    $scope.dataModel_bak={
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
                    var _currentNum = storage.getStorage('htDataSingle');

                    for(var i=0;i<_tmp.length;i++){
                        if(_tmp[i].data_addAttr.attrNum == _currentNum.data_addAttr.attrNum){
                            _tmp[i] = $scope.dataModel;
                        }
                    }

                    //_tmp.push($scope.dataModel);
                }else{
                    console.log('无数据');
                    _tmp.push($scope.dataModel);
                }
            }else{
                console.log('无数据');
                _tmp.push($scope.dataModel);
            }
            
            storage.setStorage('htData',_tmp);
            storage.setStorage('htDataSingle',$scope.dataModel);

            window.location.href='bankAddAttractCheck.html';
        },
        cancel:function(){
            $scope.dataModel=$scope.dataModel_bak;
        }
    };
    
    //页面初始加载处理
    var _num = $scope.tools.GetQueryString('order_num');

    if(_num){
        //隐藏保存按钮
        //$scope.state.isShowSave = false;

        console.log(storage.getStorage('htDataSingle'));
        $scope.dataModel = storage.getStorage('htDataSingle');
        $scope.dataModel_bak = storage.getStorage('htDataSingle');

        if($scope.dataModel.data_addAttr.state == 2){
            window.location.href = 'bankAddAttractCheck.html';
        }

        
    }else{
        //显示保存按钮
        //$scope.state.isShowSave = true;
    }


});






