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
            var _tmp = [];
            
            if(storage.getStorage('fkData')){

                if(storage.getStorage('fkData').length){
                    console.log('有数据');
                    _tmp = storage.getStorage('fkData');
                    var _currentNum = storage.getStorage('fkDataSingle');

                    for(var i=0;i<_tmp.length;i++){
                        if(_tmp[i].addPay.contractNum == _currentNum.addPay.contractNum){
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
            
            storage.setStorage('fkData',_tmp);
            storage.setStorage('fkDataSingle',$scope.dataModel);

            window.location.href="payManage.html";
        },
        check:function(){
            window.location.href='addPayCheck.html';
        }

    };
    


    //页面初始加载处理
    var _num = $scope.tools.GetQueryString('order_num');

    if(_num){
        //隐藏保存按钮
        //$scope.state.isShowSave = false;

        console.log(storage.getStorage('fkDataSingle'));
        $scope.dataModel = storage.getStorage('fkDataSingle');
        
    }else{
        //显示保存按钮
        //$scope.state.isShowSave = true;
    }

});