<template>
    <div :style="myStyle">
        <div style="height: 100px;width: 750px;flex-direction: row;align-items: center;background-color: #4E7FFF;">
            <text style="width: 72px;color: #FFFFFF;font-size: 38px;margin-left: 30px;margin-top:40px;flex: 1;">我的</text>
            <image :src="mysettings" style="width: 39px;height: 39px;margin-right: 30px;" @click="settings"></image>
        </div>
        <scroller>
            <!-- 未登录 -->
            <div v-if="isLogin" style="flex-direction: row; height: 180px;width: 750px; align-items: center; background-color: #4E7FFF" @click="goLogin()">
                <image :src="mydefaulthead" style="width: 120px;height: 120px;margin-left: 30px;border-radius: 60px;" ></image>
                <div style="flex-direction: column;margin-left: 30px;flex: 1;">
                    <text style="color:#FFFFFF;font-size:42px;" @click="login">登录/注册</text>
                    <div style="flex-direction: row;margin-top: 20px;">
                        <text style="color:#333333;font-size: 20px;">登录后可查看更多记录</text>
                    </div>
                </div>
            </div>
            <div v-else style="height: 180px;width: 750px;flex-direction: row;background-color: #4E7FFF;align-items: center" @click="editAccountInfo()">
                <div v-if="resultData.photo == null || resultData.photo == ''">
                    <image :src="mydefaulthead" style="width: 120px;height: 120px;margin-left: 30px;border-radius: 60px;" ></image>
                </div >
                <div v-else>
                    <image :src="mydefaulthead" style="width: 120px;height: 120px;margin-left: 30px;border-radius: 60px;" ></image>
                </div>

                <!--<div style="flex-direction: row;margin-left: 30px;flex: 1">-->
                <text style="height: 45px;flex: 1; color:#FFFFFF;font-size:38px;margin-left: 32px;margin-top: 70px;margin-bottom: 70px;flex: 1;">{{resultData.userflag}}</text>
                <!--</div>-->

                <div>
                    <image :src="carReversArrows" style="width: 34px;height: 50px;margin-right: 30px"></image>
                </div>
            </div>

            <div style="width: 750px;height: 160px;flex-direction: row">
                <div style="width: 250px;height: 160px;flex-direction: column;background-color: white;align-items: center;
            justify-content: center;">
                    <div v-if="isLogin || resultData.news == null">
                        <text style="color:#2B89F9;font-size: 30px;margin-bottom: 20px;margin-top: 51px;margin-left: 10px;">-</text>
                    </div >
                    <div v-else>
                        <text style="color:#2B89F9;font-size: 30px;margin-bottom: 20px;margin-top: 51px;margin-left: 0px;">{{resultData.news}}</text>
                    </div>
                    <text style="margin-bottom: 36px;font-size: 24px;font-weight: normal;color:#666666">我的消息</text>
                </div>
                <div style="width: 250px;height: 160px;flex-direction: column;background-color: white;align-items: center;justify-content: center;">
                    <div v-if="isLogin || resultData.evaluate == null">
                        <text style="color:#FF8346;font-size: 30px;margin-bottom: 20px;margin-top: 51px;margin-left: 10px;">-</text>
                    </div >
                    <div v-else>
                        <text style="color:#FF8346;font-size: 30px;margin-bottom: 20px;margin-top: 51px;margin-left: 10px;">{{resultData.evaluate}}</text>
                    </div>
                    <text style="margin-bottom: 36px;font-size: 24px;font-weight: normal;color:#666666">我的评价</text>
                </div>
                <div style="width: 250px;height: 160px;flex-direction: column;background-color: white;align-items: center;justify-content: center;">
                    <div v-if="isLogin || resultData.complain == null">
                        <text style="color:#FC5F53;font-size: 30px;margin-bottom: 20px;margin-top: 51px;margin-left: 10px;">-</text>
                    </div >
                    <div v-else>
                        <text style="color:#FC5F53;font-size: 30px;margin-bottom: 20px;margin-top: 51px;margin-left: 10px;">{{resultData.complain}}</text>
                    </div>
                    <text style="margin-bottom: 36px;font-size: 24px;font-weight: normal;color:#666666">我的投诉</text>
                </div>
            </div>

            <div class="line-style"></div>
            <div style="height: 100px;width: 750px;flex-direction: row;align-items: center;background-color: #FFFFFF;" @click="openMyCar()">
                <image :src='mycarimg' style="width: 40px;height: 40px;margin-left: 30px;margin-right: 0px;"></image>
                <text style="width: 118px;color: #999999;font-size: 30px;margin-left: 15px;margin-top:40px;flex: 1;">我的车辆</text>
                <div v-if="isLogin || resultData.carnum == null">
                    <text style="color: #333333;font-size: 30px;margin-right: 10px;"></text>
                </div >
                <div v-else>
                    <text style="color: #333333;font-size: 30px;margin-right: 10px;">{{resultData.carnum}}</text>
                </div>
                <image :src="mygetinto" style="width: 44px;height: 44px;margin-right: 10px;"></image>
            </div>

            <div class="line-style"></div>
            <div style="height: 100px;width: 750px;flex-direction: row;align-items: center;background-color: #FFFFFF;">
                <image :src='myorder' style="width: 40px;height: 40px;margin-left: 30px;margin-right: 0px;"></image>
                <text style="width: 118px;color: #999999;font-size: 30px;margin-left: 15px;margin-top:40px;flex: 1;">我的订单</text>
                <image :src="mygetinto" style="width: 44px;height: 44px;margin-right: 10px;"></image>
            </div>

            <div class="line-style"></div>
            <div style="height: 100px;width: 750px;flex-direction: row;align-items: center;background-color: #FFFFFF;">
                <image :src='myaccountbook' style="width: 40px;height: 40px;margin-left: 30px;margin-right: 0px;"></image>
                <text style="width: 118px;color: #999999;font-size: 30px;margin-left: 15px;margin-top:40px;flex: 1;">养车账本</text>
                <image :src="mygetinto" style="width: 44px;height: 44px;margin-right: 10px;"></image>
            </div>

            <div class="line-style"></div>
            <div style="height: 100px;width: 750px;flex-direction: row;align-items: center;background-color: #FFFFFF;">
                <image :src='mycollection' style="width: 40px;height: 40px;margin-left: 30px;margin-right: 0px;"></image>
                <text style="width: 118px;color: #999999;font-size: 30px;margin-left: 15px;margin-top:40px;flex: 1;">我的收藏</text>
                <image :src="mygetinto" style="width: 44px;height: 44px;margin-right: 10px;"></image>
            </div>

            <div class="line-style"></div>
            <div style="height: 100px;width: 750px;flex-direction: row;align-items: center;background-color: #FFFFFF;">
                <image :src='myshare' style="width: 40px;height: 40px;margin-left: 30px;margin-right: 0px;"></image>
                <text style="width: 118px;color: #999999;font-size: 30px;margin-left: 15px;margin-top:40px;flex: 1;">我的分享</text>
                <image :src="mygetinto" style="width: 44px;height: 44px;margin-right: 10px;"></image>
            </div>

            <div class="line-style"></div>
            <div style="height: 100px;width: 750px;flex-direction: row;align-items: center;background-color: #FFFFFF;">
                <image :src='myaboutus' style="width: 40px;height: 40px;margin-left: 30px;margin-right: 0px;"></image>
                <text style="width: 118px;color: #999999;font-size: 30px;margin-left: 15px;margin-top:40px;flex: 1;">关于我们</text>
                <image :src="mygetinto" style="width: 44px;height: 44px;margin-right: 10px;"></image>
            </div>
            <div class="line-style"></div>
            <div style="height: 70px"></div>
        </scroller>
    </div>
</template>

<script>

    import { Utils } from 'weex-ui'
    import weexUtil from '../util/util';

    const modal = weex.requireModule('modal');
    var navigator = weex.requireModule('navigator');
    var data = weex.config.data;
    var UtilModule = weex.requireModule('UtilModule');
    const globalEvent = weex.requireModule('globalEvent');
    var self;

    export default {
        components:{

        },
        data(){
            return{
                carUrl:'',
                mysettings:'',
                mydefaulthead:'',
                mycarimg:'',
                myorder:'',
                myaccountbook:'',
                mycertification:'',
                mycollection:'',
                myshare:'',
                myaboutus:'',
                mygetinto:'',
                carReversArrows:'',
                userInfo:'',
                isLogin:true,//登录状态
                resultData:{},
                status:0,
                myStyle:{
                    height:0,
                    backgroundColor:'#FFFFFF',
                },
                show: false,
                overlayCanClose: true,
                isFalse: false,
                hasAnimation: true,

            }
        },
        created:function () {
            // 实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。
            var tabPageHeight = Utils.env.getScreenHeight();

            const { tabStyles } = this;
            this.myStyle.height = tabPageHeight - 10;
            self = this;
            self.isLogin = data.logintype;
            self.requestUrl = weexUtil.serverUrl;
            self.mysettings = weexUtil.imageUrl+'my_settings.png';
            self.mydefaulthead = weexUtil.imageUrl+'my_defaulthead.png';
            self.mycarimg = weexUtil.imageUrl+'my_carimg.png';
            self.myorder = weexUtil.imageUrl+'my_order.png';
            self.myaccountbook = weexUtil.imageUrl+'my_accountbook.png';
            self.mycollection = weexUtil.imageUrl+'my_collection.png';
            self.myshare = weexUtil.imageUrl+'my_share.png';
            self.mycertification = weexUtil.imageUrl+'my_certification.png';
            self.myaboutus = weexUtil.imageUrl+'my_aboutus.png';
            self.mygetinto = weexUtil.imageUrl+'my_getinto.png';
            self.carReversArrows = weexUtil.imageUrl + 'login_province.png';
            self.getuserInfo();

            globalEvent.addEventListener(weexUtil.longriseWeexBack, function (data) {
                self.getuserInfo();
            });

        },
        methods:{
            getuserInfo(){
                //获取用户信息
                if(data.userflag===null||data.userflag===undefined){
                    modal.toast({message:'请重新登录',duration:1});
                    return;
                }
                var jsonObj = {};
                jsonObj.userflag = data.userflag;
                UtilModule.okhttp(self.requestUrl, "weexuserinfo", JSON.stringify(jsonObj), function (result) {
                        self.setData2UI(result);
                    }
                );
            },
            setData2UI(result){

                if(result != undefined && result != null)
                {
                    var tempData = JSON.parse(result);
                    if(tempData != undefined && tempData != null)
                    {
                        if(tempData.restate == 1)
                        {
                            self.resultData = tempData.data;
                            return;
                        }
                    }
                }

                modal.toast({ 'message': '数据加载失败', 'duration': 1 });
            },

            settings(){
                modal.toast({ message: '设置', duration: 1 });
                return;
            },
            login(){
                navigator.push({
                    url:weexUtil.pushUrl + 'weex/login/login.js',
                    animated:true,
                    data:{

                    }
                },event=> {

                });
            },
            openMyCar(){
                if(self.resultData.carnum==0){
                    navigator.push({
                        url: weexUtil.pushUrl + 'weex/car/carinfo.js',
                        animated: true,
                        data: {
                            userflag:data.userflag,
                            carnum:self.resultData.carnum,
                        }
                    }, event => {

                    });
                }else{
                    navigator.push({
                        url: weexUtil.pushUrl + 'weex/car/mycarlist.js',
                        animated: true,
                        data: {
                            userflag:data.userflag,
                            carnum:self.resultData.carnum,
                        }
                    }, event => {

                    });
                }
            },

        },
    }
</script>

<style scoped>
    .line-style{
        background-color: #F1F1F1;
        height: 1px;
    }
</style>
