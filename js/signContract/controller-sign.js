/**
 * Created by Administrator on 2017/7/7.
 */
/*angular模块部分*/
var app=angular.module('signContractApp',[]);
app.controller("signContractCtrl",function($scope,$http,$compile){

    $scope.tools={
        getRandomNum:function(Min,Max){    //随机数生成
            var Range = Max - Min;   
            var Rand = Math.random();   
            return(Min + Math.round(Rand * Range)); 
        }
    };
    $scope.state={
        mainPage:true,           //主页显示控制
        contractPreStatus:false, //预览显示控制
        callbackStatus:false,    //回执单显示控制
        cover:false              //模层显示控制
    };
    $scope.dictionary={
        useMethods:useMethods,
        houseCharacters:houseCharacters,
        houseMethods:houseMethods,
        houseStructures:houseStructures,
        payNums:payNums,
        sellMethods:sellMethods,
        breakTimes:breakTimes,
        handleMethods:handleMethods,
        middleAgents:middleAgents
    };
    $scope.dataModel={
        sellerInfo:[
            {
                name:"",
                identity:"",
                phone:"",
                address:""
            }
        ],
        buyerInfo:[
            {
                name:"",
                identity:"",
                phone:"",
                address:""
            }
        ],
        houseInfo:{
            address:"",
            rightNum:"",
            regTime:"",
            totalLevel:"",
            area:"",
            areaInner:"",
            use:0,
            houseCharacter:0,
            addressNum:"",
            houseMethod:0,
            deadline:"",
            getMethod:0,
            houseStructure:0,
            otherMsg:""
        },
        dealInfo:{
            houseTotalMoney:"",
            dwellingMoney:"",
            undwellingMoney:"",
            payMoney:"",
            lookMoney:"",
            payNum:1,
            payInfo:[
                {
                    price:"",
                    time:""
                }
            ]
        },
        contractInfo:{
            taxMoney:"",
            sellMethod:0,
            sellTime:"",
            breakTime:0,
            breakMoney:"",
            handleMethod:0,
            middlePeo:0,
            otherMsg:""
        },
        decisionTime:'2017年05月23日', //合同签订日期
        code:'', //条形码
        siteTime:'2017-5-3' //网签备案时间

    };

    $scope.ui={
        addSeller:function(){
            $scope.dataModel.sellerInfo.push({
                name:"",
                identity:"",
                phone:"",
                address:""
            });
        },
        addBuyer:function(){

            $scope.dataModel.buyerInfo.push({
                name:"",
                identity:"",
                phone:"",
                address:""
            });
        },
        changeNum:function(){

            /*var _tmp = [];
            for(var i=0;i<$scope.dataModel.dealInfo.payNum;i++){
                _tmp.push({
                    price:"ppp",
                    time:"ttt"
                });
            }
            console.log(_tmp)
            $scope.dataModel.dealInfo.payInfo = _tmp;*/
            if($scope.dataModel.dealInfo.payNum>$scope.dataModel.dealInfo.payInfo.length){
                for(var i=0;i<($scope.dataModel.dealInfo.payNum-$scope.dataModel.dealInfo.payInfo.length);i++){
                    $scope.dataModel.dealInfo.payInfo.push({
                        price:"",
                        time:""
                    });
                }
            }else{
                for(var i=0;i<($scope.dataModel.dealInfo.payInfo.length-$scope.dataModel.dealInfo.payNum);i++){
                    $scope.dataModel.dealInfo.payInfo.pop();
                }
            }
            
            
        },
        save:function(){
            //生成随机条形码数(合同单号)-测试使用
            $scope.dataModel.code=$scope.tools.getRandomNum(1,100000000000000000000);
            storage.removeStorage('wqslData');
            storage.setStorage('wqslData',$scope.dataModel);
            alert('保存成功！');

            $scope.state.mainPage=false;
            $scope.state.cover=true;
            $scope.state.callbackStatus = true;

        },
        cancel:function(){
            window.location.reload();
        },
        contractPre:function(){
            $scope.state.mainPage=false;
            $scope.state.cover=true;
            $scope.state.contractPreStatus = true;
        },
        closePre:function(){
            $scope.state.mainPage=true;
            $scope.state.cover=false;
            $scope.state.contractPreStatus = false;
        },
        closeBack:function(){
            $scope.state.mainPage=true;
            $scope.state.cover=false
            $scope.state.callbackStatus = false;
        }
    };

    




    //数据模拟
    var _h = storage.getStorage('fyyzDataSingle');
    var _obj = [];
    for(var i=0;i<_h.data_2.obligee.length;i++){
        _obj.push({
            name:_h.data_2.obligee[i].obligee_name,
            identity:_h.data_2.obligee[i].obligee_card_num,
            phone:'13089992332',
            address:'大墅'
        })
    }
    $scope.dataModel.sellerInfo=_obj;
    $scope.dataModel.houseInfo={
        address:_h.data_2.common.obligee_address,
        rightNum:_h.data_2.common.obligee_right_num,
        regTime:_h.data_1.date,
        totalLevel:_h.data_2.common.obligee_level_count,
        area:_h.data_2.common.obligee_right_area,
        areaInner:_h.data_2.common.obligee_inner_area,
        use:0,
        houseCharacter:0,
        addressNum:"",
        houseMethod:0,
        deadline:"",
        getMethod:0,
        houseStructure:0,
        otherMsg:""
    };
});






