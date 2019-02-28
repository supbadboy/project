<template>
    <div class="wxc-demo">

        <div style="height: 100px;width: 750px;flex-direction: row;align-items: center;background-color: #4E7FFF;">
            <image :src="closeImage" style="width: 44px; height: 44px; margin-left: 23px" @click="backPage"></image>
            <text style="color: #FFFFFF;font-size: 38px;margin-left: 30px;flex: 1;">我的车辆</text>
            <image :src="imageMoreUrl" style="width: 44px;height: 35px;margin-right: 30px;" @click="minibarRightButtonClick"></image>
        </div>

        <!-- 有数据 -->
        <div style="background-color: #ffffff;">
            <list :style="myStyle">

                <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
                    <!-- <text class="indicator-text">加载中...</text> -->
                    <loading-indicator class="indicator"></loading-indicator>
                </refresh>

                <cell class="cell" v-for="item in dataList" @click="onItemClick(item)">
                    <div style="flex-direction: row;padding: 30px;background-color: #ffffff;border-color: #F5F5F5;border-width: 1px;border-radius: 20px;margin-top: 30px;margin-left: 20px;margin-right: 20px;">
                        <div v-if="item.carphoto == null || item.carphoto == ''">
                            <image style="border-radius: 4px;border-bottom-color: #CDD2D9;border-width: 1px;width: 200px;height: 150px;" :src="my_car_wsczp"></image>
                        </div >
                        <div v-else>
                            <image style="border-radius: 4px;border-bottom-color: #CDD2D9;border-width: 1px;width: 200px;height: 150px;" :src="item.carphoto"></image>
                        </div>
                        <div style="flex-direction: column;margin-left: 30px;margin-top:20px;">
                            <div>
                                <text style="color: #333333;font-size: 36px;font-weight:bold;">{{item.carno}}</text>
                            </div>
                            <div style="flex-direction: row;margin-top: 30px;">
                                <div v-if="item.vehicletype == null || item.vehicletype == ''">
                                    <text style="color: #333333;font-size: 30px;">车辆类型：未知</text>
                                </div>
                                <div v-else>
                                    <text style="color: #333333;font-size: 30px;">车辆类型：{{item.vehicletype}}</text>
                                </div>
                            </div>

                        </div>
                    </div>

                </cell>
            </list>
        </div>

        <wxc-popover ref="wxc-popover"
                     :buttons="btns"
                     :position="popoverPosition"
                     :arrowPosition="popoverArrowPosition"
                     @wxcPopoverButtonClicked="popoverButtonClicked">
        </wxc-popover>

    </div>
</template>

<script >
    import weexUtil from '../util/util';
    import { WxcMinibar, WxcPopover,Utils} from 'weex-ui';

    var navigator = weex.requireModule('navigator');
    const modal = weex.requireModule('modal');
    var data = weex.config.data;
    var UtilModule = weex.requireModule('UtilModule');
    var globalEvent = weex.requireModule('globalEvent');
    var self;
    const my_car_tjcl = weexUtil.imageUrl + "my_carimg.png";
    const my_car_wdpj = weexUtil.imageUrl + "my_share.png";
    const my_car_wdts = weexUtil.imageUrl + "my_collection.png";

    export default{
        components:{WxcMinibar, WxcPopover
        },
        data(){
            return{
                imageMoreUrl:'',
                closeImage:"",
                my_car_wsczp:"",
                carCertificationTime:'',
                isLogin:false,
                dataList:[],
                refreshing:false,
                userInfo:null,
                btns:[
                    {
                        icon: my_car_tjcl,
                        text:'添加车辆',
                        key:'key-scan'
                    },
                    {
                        icon: my_car_wdpj,
                        text:'我的评价',
                        key:'key-help'
                    },
                    {
                        icon: my_car_wdts,
                        text:'我的投诉',
                        key:'key-help'
                    },
                ],
                myStyle:{
                    height:0,
                },
                popoverPosition:{x:-14,y:80},
                popoverArrowPosition:{pos:'top',x:-15}

            }
        },
        created:function(){
            self = this;
            self.requestUrl = weexUtil.serverUrl;
            var tabPageHeight = Utils.env.getScreenHeight();
            const { tabStyles } = this;
            this.myStyle.height = tabPageHeight - 120;
            self.imageMoreUrl = weexUtil.imageUrl+"my_settings.png";
            self.carCertificationTime = weexUtil.imageUrl+"carCertificationTime.png";
            self.closeImage = weexUtil.imageUrl + "login_close.png";
            self.my_car_wsczp = weexUtil.imageUrl + "logo.png";
            self.request();

            globalEvent.addEventListener(weexUtil.longriseWeexBack, function (data) {
                self.request();
            });

        },
        methods:{
            backPage() {
                navigator.pop({
                    animated: "true"
                }, event => {
                });
            },
            request(){
                //请求数据
                if(data.userflag == undefined || data.userflag == null)
                {
                    modal.toast({ message: '用户信息为空', duration: 1 });
                }
                var jsonObj = {};
                jsonObj.userflag = data.userflag;
                UtilModule.okhttp(self.requestUrl,"weexselectcarlist",JSON.stringify(jsonObj),function(result){
                    //设置到UI中
                    self.setData2UI(result);
                });

            },
            setData2UI(result){
                self.refreshing = false;
                if(result != undefined && result != null)
                {
                    var tempData = JSON.parse(result);
                    if(tempData != undefined && tempData != null)
                    {
                        if(tempData.restate == 1)
                        {
                            self.dataList = tempData.data;
                            return;
                        }
                    }
                    modal.toast({ 'message': tempData.redes, 'duration': 1 });
                    return;
                }
                modal.toast({ 'message': '数据加载失败', 'duration': 1 });
            },
            minibarRightButtonClick(){
                this.$refs['wxc-popover'].wxcPopoverShow();
            },
            popoverButtonClicked(obj){
                //modal.toast({ 'message': `key:${obj.key}, index:${obj.index}`, 'duration': 1 });
                if(obj.index === 0)
                {
                    navigator.push({
                        url:weexUtil.pushUrl + 'weex/car/carinfo.js',
                        animated:true,
                        data:{
                            userflag:data.userflag,
                            carnum:0,
                        }
                    },event=>{

                    });
                }
                if(obj.index === 1)
                {
                    modal.toast({ message: '我的评价', duration: 1 });
                    return;
                }
                if(obj.index === 2)
                {
                    modal.toast({ message: '我的投诉', duration: 1 });
                    return;
                }
            },
            onrefresh(){
                self.refreshing = true;
                self.request();
            },
            onItemClick(result){
                navigator.push({
                    url:weexUtil.pushUrl + 'weex/car/carinfo.js',
                    animated:true,
                    data:{
                        carno:result.carno,
                        carid:result.id,
                        carnum:1,
                    }
                },event=>{

                });
            }
        },
    }
</script>


<style scoped>
    .wxc-demo {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #FFFFFF;
    }
    .refresh {
        width: 750px;
        display: -ms-flex;
        display: -webkit-flex;
        display: flex;
        -ms-flex-align: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        align-items: center;
    }
    .indicator {
        margin-top: 16px;
        margin-bottom: 16px;
        height: 60px;
        width: 60px;
        color: #000000;
    }
</style>
