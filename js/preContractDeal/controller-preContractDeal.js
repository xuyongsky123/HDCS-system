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
        proposerInfo:{
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
            applyBank:0,
            applyMoney:""
        },
        houseInfo:{
            code:"",
            obligee:[
                {
                    obligee_name:"",
                    obligee_card_type:0,
                    obligee_card_num:""
                }
            ],
            houseNum:"",
            houseArea:"",
            insideArea:"",
            outsideArea:"",
            totalLayer:"",
            layer:"",
            houseLocation:""
        }
    };
    $scope.ui={
        //验证
        check:function(){
            /*从本地拿数据*/
            var _obtain = storage.getStorage('fyyzData');
            var _currentObj = {};
            console.log(_obtain)
            if(_obtain){
                if(_obtain.length){
                    console.log('有数据');

                    for(var i=0;i<_obtain.length;i++){
                        if(_obtain[i].other.code == $scope.dataModel.houseInfo.code){
                            _currentObj = _obtain[i];
                        }
                    }

                }else{
                    console.log('无数据');
                }
            }else{
                console.log('无数据');
            }

            if(_currentObj.data_2){
                $scope.dataModel.houseInfo.obligee = _currentObj.data_2.obligee;
                for(var i=0;i<$scope.dataModel.houseInfo.obligee.length;i++){
                    $scope.dataModel.houseInfo.obligee[i].obligee_card_type = identity[$scope.dataModel.houseInfo.obligee[i].obligee_card_type].value;
                }

                $scope.dataModel.houseInfo.houseNum = _currentObj.data_2.common.obligee_right_num;
                $scope.dataModel.houseInfo.houseArea = _currentObj.data_2.common.obligee_right_area;
                $scope.dataModel.houseInfo.insideArea = _currentObj.data_2.common.obligee_inner_area;
                $scope.dataModel.houseInfo.outsideArea = _currentObj.data_2.common.obligee_outer_area;
                $scope.dataModel.houseInfo.totalLayer = _currentObj.data_2.common.obligee_level_count;
                $scope.dataModel.houseInfo.layer = _currentObj.data_2.common.obligee_level;
                $scope.dataModel.houseInfo.houseLocation = _currentObj.data_2.common.obligee_address;
            }
            
            /*$scope.dataModel.houseInfo = {
                code:"",
                obligee:[
                    {
                        obligee_name:"",
                        obligee_card_type:0,
                        obligee_card_num:""
                    }
                ],
                houseNum:"",
                houseArea:"",
                insideArea:"",
                outsideArea:"",
                totalLayer:"",
                layer:"",
                houseLocation:""
            }*/
        },
        callback:function(){

        },
        submit:function(){
            
            storage.setStorage('dkyclData',$scope.dataModel);

            window.location.href="signContract.html";
        }
    };



    


});