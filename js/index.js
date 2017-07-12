//刷新iframe页面内容
function refreshIframe(url){
	$('#iframe').html('<iframe name="myIframe" src="'+url+'" width="100%" height="100%" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="yes" allowtransparency="yes"></iframe>');
}

var app = angular.module("indexApp", []);
app.controller("menuCtrl", function($scope){

	$scope.dataModel = {
		menu:[],	//一级菜单数据
		menu_1:[],	//二级菜单数据
	};

	$scope.ui = {
		//一级菜单点击
		menuClick:function(item){
			//初始化页-指向欢迎页
			refreshIframe('welcome.html');

			var _url;
			switch(item.name){
				case '系统管理':
					_url = '';
					break;
				case '贷款预受理':
					_url = 'data/dkysl.json';
					break;
				case '房源公示':
					_url = 'data/fygs.json';
					break;
				case '网签受理':
					_url = 'data/wqsl.json';
					break;
				case '资金监管':
					_url = 'data/zjjg.json';
					break;
				case '抵押贷款':
					_url = 'data/dydk.json';
					break;
			}

			//加载二级菜单
			$.ajax({
				url:_url,
				data:{
					id:item.id
				},
				success:function(data){

					$scope.$apply(function(){
						$scope.dataModel.menu_1 = JSON.parse(data);
					});

				},
				error:function(x,y){
					console.log(x+'......'+y);
				}
			});
		},
		//二级菜单点击
		menuClick_1:function(item){
			
			refreshIframe(item.url);
		}
	};

	//加载一级菜单
	$.ajax({
		url:'data/menu.json',
		success:function(data){

			$scope.$apply(function(){
				$scope.dataModel.menu = JSON.parse(data);
			});

			//这里加载二级菜单仅供展示使用，实际中需要用户去点击一级菜单加载二级菜单
			$scope.ui.menuClick({name:'房源公示'});

		},
		error:function(x,y){
			console.log(x+'......'+y);
		}
	});

});