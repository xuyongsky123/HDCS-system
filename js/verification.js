var app = angular.module("verificationApp", []);
app.controller("veryInfoCtrl", function($scope){

	$scope.tools = {
		//获得url中的get参数
		//name 需要获得参数的名称
		GetQueryString:function(name){
		  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		  var r = window.location.search.substr(1).match(reg);
		  if (r!=null)return decodeURIComponent(r[2]); 
		  return null;
		}
	};

	$scope.state = {
		isShowSave:true,	//保存按钮显示隐藏
	};

	//初始化数据字典
	$scope.dictionary = {
		character:character,	//性质
		identity:identity,	//证件类型
		nation:nation,		//民族

		searchCond:searchCond,	//模糊查询条件
	};

	//初始化数据
	$scope.dataModel = {
		data_1:{
			user_name:'',	//名称
			user_character:0,	//性质
			user_card_type:0,	//证件类型
			user_card_num:'',	//证件号码
			user_nation:0,		//民族
			user_address:'',		//联系地址
			date:new Date()
		},	//申请人相关信息数据
		data_2:{
			obligee:[
				{
					obligee_name:'',		//权利人名称
					obligee_card_type:0,	//证件类型
					obligee_card_num:'',	//证件号码
				}
			],
			common:{
				obligee_right_num:'',	//产权证号
				obligee_right_area:'',	//产权面积
				obligee_inner_area:'',	//套内面积
				obligee_outer_area:'',	//分摊面积
				obligee_level_count:'',	//总层数
				obligee_level:'',		//所在层
				obligee_address:''		//房屋地址
			}
		},	//权利人相关信息数据
		data_3:{
			searchCond:0,	//默认选中的模糊查询条件
			searchResult:{},//房源验证结果信息
		},	//检索相关信息数据
		data_4:{
			isPass:'',	//是否验证通过0是1否
		}	//验证相关信息数据
	};

	//原始数据
	$scope.initData = {
		data_1:{
			user_name:'',	//名称
			user_character:0,	//性质
			user_card_type:0,	//证件类型
			user_card_num:'',	//证件号码
			user_nation:0,		//民族
			user_address:'',		//联系地址
			date:new Date()
		},	//申请人相关信息数据
		data_2:{
			obligee:[
				{
					obligee_name:'',		//权利人名称
					obligee_card_type:0,	//证件类型
					obligee_card_num:'',	//证件号码
				}
			],
			common:{
				obligee_right_num:'',	//产权证号
				obligee_right_area:'',	//产权面积
				obligee_inner_area:'',	//套内面积
				obligee_outer_area:'',	//分摊面积
				obligee_level_count:'',	//总层数
				obligee_level:'',		//所在层
				obligee_address:''		//房屋地址
			}
		},	//权利人相关信息数据
		data_3:{
			searchCond:0,	//默认选中的模糊查询条件
			searchResult:{},//房源验证结果信息
		},	//检索相关信息数据
		data_4:{
			isPass:'',	//是否验证通过0是1否
		}	//验证相关信息数据
	}


	//操作事件处理
	$scope.ui = {
		//增加权利人
		addUser:function(){
			$scope.dataModel.data_2.obligee.push({
				obligee_name:'',		//权利人名称
				obligee_card_type:0,	//证件类型
				obligee_card_num:'',	//证件号码
			});
		},
		//检索点击事件
		searchClick:function(){
			$.ajax({
				url:'data/searchResult.json',
				success:function(data){

					data = JSON.parse(data);

					$scope.$apply(function(){

						//存储原始数据
						$scope.initData.data_3.searchResult = Object.assign({},data);

						if(data.sealUp == 0 && data.freeze == 0 && data.pledge == 0 && data.sign == 0){
							$scope.dataModel.data_4.isPass = 0;
						}else{
							$scope.dataModel.data_4.isPass = 1;
						}

						data.sealUp = sealStatus[data.sealUp];
						data.freeze = freezeStatus[data.freeze];
						data.pledge = pledgeStatus[data.pledge];
						data.foreshow = foreshowStatus[data.foreshow];
						data.sign = signStatus[data.sign];

						$scope.dataModel.data_3.searchResult = data;

					});

				},
				error:function(x,y){
					alert(x+'......'+y);
				}
			});
		},
		//保存
		save:function(){

			var _tmp = [];
			$scope.dataModel.data_3.searchResult = $scope.initData.data_3.searchResult;
			console.log($scope.dataModel.data_3.searchResult)

            if(storage.getStorage('fyyzData')){

            	if(storage.getStorage('fyyzData').length){
	            	console.log('有数据');
		            _tmp = storage.getStorage('fyyzData');
		            _tmp.push($scope.dataModel);
	            }else{
	            	console.log('无数据');
		            _tmp.push($scope.dataModel);
	            }
            }else{
            	console.log('无数据');
		        _tmp.push($scope.dataModel);
            }
            
		    storage.setStorage('fyyzData',_tmp);

		    window.location.href="housePublicity.html";

		}
	};




	//页面初始加载处理
	var _num = $scope.tools.GetQueryString('right_num');

	if(_num){
		//隐藏保存按钮
		$scope.state.isShowSave = false;

		
		$scope.dataModel = storage.getStorage('fyyzDataSingle');

		var _h = storage.getStorage('fyyzDataSingle').data_3.searchResult;
		_h.sealUp = sealStatus[_h.sealUp];
		_h.freeze = freezeStatus[_h.freeze];
		_h.pledge = pledgeStatus[_h.pledge];
		_h.foreshow = foreshowStatus[_h.foreshow];
		_h.sign = signStatus[_h.sign];
		$scope.dataModel.data_3.searchResult = _h;

		
	}else{
		//显示保存按钮
		$scope.state.isShowSave = true;
	}

});