/**
 * Created by Administrator on 2017/7/7.
 */
function setConfig(myApp){
    myApp.config(function($provide){
        $provide.factory("addContractService",function($http){
            return {
                getAuditInfo:function(){
                    return $http.post('data/bankAddContract.json',function(data){
                        console.log(data);
                    });
                }
            }
        });
    });
}
