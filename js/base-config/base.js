//性质
var character = [
	{key:0,value:"个人"},
	{key:1,value:"企业"},
	{key:2,value:"国家机关"},
	{key:3,value:"事业单位"},
	{key:4,value:"其他"}
];

//证件类型
var identity = [
	{key:0,value:"居民身份证"},
	{key:1,value:"护照"},
	{key:2,value:"军官证"},
	{key:3,value:"士兵证"},
	{key:4,value:"港澳型行政区居民身份证"},
	{key:5,value:"台胞证"},
	{key:6,value:"警官证"},
	{key:7,value:"营业执照"},
	{key:8,value:"组织机构代码证"},
	{key:9,value:"社会团体法人登记证书"},
	{key:10,value:"往来大陆通行证"},
	{key:11,value:"文职干部证"},
	{key:12,value:"学员证"},
	{key:13,value:"事业单位法人证书"},
	{key:14,value:"其他"}
];

//民族
var nation = [
	{key:0,value:"汉族"},
	{key:1,value:"蒙古族"},
	{key:2,value:"回族"},
	{key:3,value:"藏族"},
	{key:4,value:"维吾尔族"},
	{key:5,value:"苗族"},
	{key:6,value:"彝族"},
	{key:7,value:"壮族"},
	{key:8,value:"布依族"},
	{key:9,value:"朝鲜族"},
	{key:10,value:"满族"},
	{key:11,value:"侗族"},
	{key:12,value:"瑶族"},
	{key:13,value:"白族"},
	{key:14,value:"土家族"},
	{key:15,value:"哈尼族"},
	{key:16,value:"哈萨克族"},
	{key:17,value:"傣族"},
	{key:18,value:"黎族"},
	{key:19,value:"僳僳族"},
	{key:20,value:"佤族"},
	{key:21,value:"畲族"},
	{key:22,value:"高山族"},
	{key:23,value:"拉祜族"},
	{key:24,value:"水族"},
	{key:25,value:"东乡族"},
	{key:26,value:"纳西族"},
	{key:27,value:"景颇族"},
	{key:28,value:"柯尔克孜族"},
	{key:29,value:"土族"},
	{key:30,value:"达斡尔族"},
	{key:31,value:"仫佬族"},
	{key:32,value:"羌族"},
	{key:33,value:"布朗族"},
	{key:34,value:"撒拉族"},
	{key:35,value:"毛南族"},
	{key:36,value:"仡佬族"},
	{key:37,value:"锡伯族"},
	{key:38,value:"阿昌族"},
	{key:39,value:"普米族"},
	{key:40,value:"塔吉克族"},
	{key:41,value:"怒族"},
	{key:42,value:"乌孜别克族"},
	{key:43,value:"俄罗斯族"},
	{key:44,value:"鄂温克族"},
	{key:45,value:"德昂族"},
	{key:46,value:"保安族"},
	{key:47,value:"裕固族"},
	{key:48,value:"京族"},
	{key:49,value:"塔塔尔族"},
	{key:50,value:"独龙族"},
	{key:51,value:"鄂伦春族"},
	{key:52,value:"赫哲族"},
	{key:53,value:"门巴族"},
	{key:54,value:"珞巴族"},
	{key:55,value:"基诺族"}
];

//模糊查询条件
var searchCond = [
	{key:0,value:"根据不动产证号查询(模糊)1"},
	{key:1,value:"根据房产证号查询"}
];

//查封状态
var sealStatus = ['未查封','封杀'];
var freezeStatus = ['未冻结','冻结'];
var pledgeStatus = ['未抵押','抵押'];
var foreshowStatus = ['无贷款','有贷款'];
var signStatus = ['未签约','签约'];