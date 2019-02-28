<template>
    <div style="background-color: #F7F7F7;">
        <div style="height: 100px;width: 750px;flex-direction: row;align-items: center;background-color: #4E7FFF;">
            <image :src="closeImage" style="width: 44px; height: 44px; margin-left: 23px" @click="backPage"></image>
            <text style="color: #FFFFFF;font-size: 38px;margin-left: 30px;flex: 1;">车辆信息</text>
        </div>

        <scroller style="background-color: #F7F7F7;">
            <div style="flex-direction: column;">
                <div style="flex-direction: row;background-color: #4E7FFF;padding-bottom: 20px;justify-content: center;align-items: center">
                    <image :src='carUrl' style="width: 120px;height: 120px;margin-left: 30px;border-radius: 60px;"></image>
                </div>
                <div v-if="state" style="border-radius: 20px;flex-direction: column;">

                    <div class="item-bg-style">
                        <text class="item-title-style">车牌号</text>
                        <input type="text" v-model="carno" placeholder="输入车牌号" placeholder-color="#B8BDCD" singleline="true" style="margin-left: 31px;font-size: 32px; color:#333333;flex: 1;margin-top:0px;margin-right: 20px"/>
                    </div>
                    <div class="item-bg-style">
                        <text class="item-title-style">车架号</text>
                        <input type="text" v-model="vinno" placeholder="输入车架号" placeholder-color="#B8BDCD" singleline="true" style="margin-left: 31px;font-size: 32px; color:#333333;flex: 1;margin-top:0px;margin-right: 20px"/>
                    </div>
                    <div class="item-bg-style">
                        <text class="item-title-style">发动机号</text>
                        <input type="text" v-model="engineno" placeholder="输入发动机号" placeholder-color="#B8BDCD" singleline="true" style="margin-left: 31px;font-size: 32px; color:#333333;flex: 1;margin-top:0px;margin-right: 20px"/>
                    </div>
                    <div class="item-bg-style">
                        <text class="item-title-style">车辆类型</text>
                        <input type="text" v-model="vehicletype" placeholder="输入车辆类型" placeholder-color="#B8BDCD" singleline="true" style="margin-left: 31px;font-size: 32px; color:#333333;flex: 1;margin-top:0px;margin-right: 20px"/>
                    </div>
                </div>

                <div v-else style="border-radius: 20px;flex-direction: column;">

                    <div class="item-bg-style">
                        <text class="item-title-style">车牌号</text>
                        <input type="text" name="carno" style="flex: 1;color: #333333;font-size: 30px;margin-left: 40px;" :disabled="false" ref="input" :value="resultData.carno" @input="getCarno" />
                    </div>
                    <div class="item-bg-style">
                        <text class="item-title-style">车架号</text>
                        <input type="text" name="vinno" style="flex: 1;color: #333333;font-size: 30px;margin-left: 40px;" :disabled="false" ref="input1" :value="resultData.vinno" @input="getVinno" />
                    </div>
                    <div class="item-bg-style">
                        <text class="item-title-style">发动机号</text>
                        <input type="text" name="engineno" style="flex: 1;color: #333333;font-size: 30px;margin-left: 40px;" :disabled="false" ref="input2" :value="resultData.engineno" @input="getEngineno" />
                    </div>
                    <div class="item-bg-style">
                        <text class="item-title-style">车辆类型</text>
                        <input type="text" name="vehicletype" style="flex: 1;color: #333333;font-size: 30px;margin-left: 40px;" :disabled="false" ref="input3" :value="resultData.vehicletype" @input="getVehicletype" />
                    </div>
                </div>
                <text v-if="!state" style="background-color: #4E7FFF;border-radius: 4px;margin-top: 60px;margin-bottom: 10px;color: #ffffff;font-size: 36px;text-align: center;padding-bottom: 27px;padding-top: 27px;margin-left: 30px;margin-right: 30px;" @click="updateCar()">修改</text>
                <text v-else style="background-color: #4E7FFF;border-radius: 4px;margin-top: 60px;margin-bottom: 10px;color: #ffffff;font-size: 36px;text-align: center;padding-bottom: 27px;padding-top: 27px;margin-left: 30px;margin-right: 30px;" @click="addCar()">保存</text>
                <text v-if="!state" style="background-color: #4E7FFF;border-radius: 4px;margin-top: 10px;margin-bottom: 60px;color: #ffffff;font-size: 36px;text-align: center;padding-bottom: 27px;padding-top: 27px;margin-left: 30px;margin-right: 30px;" @click="delCar()">删除</text>
            </div>

        </scroller>
    </div>
</template>

<script>

    import { WxcIcon } from 'weex-ui'
    import weexUtil from '../util/util';

    var navigator = weex.requireModule('navigator');
    const modal = weex.requireModule('modal');
    var data = weex.config.data;
    var UtilModule = weex.requireModule('UtilModule');
    var self;

    export default {
        components:{
            WxcIcon
        },
        data(){
            return{
                carUrl:'',
                closeImage:'',
                requestUrl:'',
                carnum:'',
                resultData:{},
                state:false,
                isEdit:false,
            }
        },
        created:function () {
            // 实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。
            self = this;
            self.carnum = data.carnum;
            self.requestUrl = weexUtil.serverUrl;
            self.closeImage = weexUtil.imageUrl+'login_close.png';
            self.carUrl = weexUtil.imageUrl+'car_photo_default.png';
            self.request();
        },
        methods:{
            backPage() {
                navigator.pop({
                    animated: "true"
                }, event => {
                });
            },
            request(){
                if(self.carnum!=null&&self.carnum==0)
                {
                    self.state = true;
                    return;
                }
                else
                {
                    self.state = false;
                    self.isEdit = true;
                    if(data.carid == undefined || data.carid == null)
                    {
                        modal.toast({ 'message': '数据加载失败', 'duration': 1 });
                        return;
                    }
                    var jsonObj = {};
                    jsonObj.carid = data.carid;
                    UtilModule.okhttp(self.requestUrl,"weexselectcarinfo",JSON.stringify(jsonObj),function(result){
                        self.setData2UI(result);

                    });
                }
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
                    modal.toast({ 'message': tempData.redes, 'duration': 1 });
                    return;
                }
                modal.toast({ 'message': '数据加载失败', 'duration': 1 });
            },
            addCar(){
                if(self.carno === null || self.carno === undefined){
                    modal.toast({message:'请输入车牌号',duration:1});
                    return;
                }
                if(self.vinno === null || self.vinno === undefined){
                    modal.toast({message:'请输入车架号',duration:1});
                    return;
                }
                if(self.engineno === null || self.engineno === undefined){
                    modal.toast({message:'请输入发动机号',duration:1});
                    return;
                }
                if(self.vehicletype === null || self.vehicletype === undefined){
                    modal.toast({message:'请输入车辆类型',duration:1});
                    return;
                }
                var jsonObj = {};
                jsonObj.carno = self.carno;
                jsonObj.vinno = self.vinno;
                jsonObj.engineno = self.engineno;
                jsonObj.vehicletype = self.vehicletype;
                jsonObj.carphoto = '';
                jsonObj.userflag = data.userflag;
                UtilModule.okhttp(self.requestUrl,"weexaddcarinfo",JSON.stringify(jsonObj),function(result){
                    if(result !== undefined && result !== null)
                    {
                        var tempData = JSON.parse(result);
                        if(tempData.restate == 1)
                        {
                            modal.toast({ message: '恭喜您，新增车辆成功', duration: 1 });
                            navigator.pop({
                                animated: "true"
                            }, event => {
                            });
                            return;
                        }
                        modal.toast({ message: tempData.redes, duration: 1 });
                        return;
                    }
                    modal.toast({ message: '新增车辆失败', duration: 1 });
                });
            },
            getCarno(event){
                self.resultData.carno = event.value;
            },
            getVinno(event){
                self.resultData.vinno = event.value;
            },
            getEngineno(event){
                self.resultData.engineno = event.value;
            },
            getVehicletype(event){
                self.resultData.vehicletype = event.value;
            },
            updateCar(){
                if(self.resultData.carno === null || self.resultData.carno === undefined){
                    modal.toast({message:'请输入车牌号',duration:1});
                    return;
                }
                if(self.resultData.vinno === null || self.resultData.vinno === undefined){
                    modal.toast({message:'请输入车架号',duration:1});
                    return;
                }
                if(self.resultData.engineno === null || self.resultData.engineno === undefined){
                    modal.toast({message:'请输入发动机号',duration:1});
                    return;
                }
                if(self.resultData.vehicletype === null || self.resultData.vehicletype === undefined){
                    modal.toast({message:'请输入车辆类型',duration:1});
                    return;
                }
                var jsonObj = {};
                jsonObj.carno = self.resultData.carno;
                jsonObj.vinno = self.resultData.vinno;
                jsonObj.engineno = self.resultData.engineno;
                jsonObj.vehicletype = self.resultData.vehicletype;
                jsonObj.carphoto = '';
                jsonObj.carid = data.carid;
                UtilModule.okhttp(self.requestUrl,"weexupdatecarinfo",JSON.stringify(jsonObj),function(result){
                    if(result !== undefined && result !== null)
                    {
                        var tempData = JSON.parse(result);
                        if(tempData.restate == 1)
                        {
                            modal.toast({ message: '恭喜您，修改车辆信息成功', duration: 1 });
                            navigator.pop({
                                animated: "true"
                            }, event => {
                            });
                            return;
                        }
                        modal.toast({ message: tempData.redes, duration: 1 });
                        return;
                    }
                    modal.toast({ message: '修改车辆信息失败', duration: 1 });
                });
            },
            delCar(){
                if(data.carid == undefined || data.carid == null)
                {
                    modal.toast({ 'message': '数据加载失败', 'duration': 1 });
                    return;
                }
                var jsonObj = {};
                jsonObj.carid = data.carid;
                UtilModule.okhttp(self.requestUrl,"weexdeletecarinfo",JSON.stringify(jsonObj),function(result){
                    if(result !== undefined && result !== null)
                    {
                        var tempData = JSON.parse(result);
                        if(tempData.restate == 1)
                        {
                            modal.toast({ message: '删除车辆成功', duration: 1 });
                            navigator.pop({
                                animated: "true"
                            }, event => {

                            });
                            return;
                        }
                        modal.toast({ message: tempData.redes, duration: 1 });
                        return;
                    }
                    modal.toast({ message: '删除车辆失败', duration: 1 });
                });

            }

        }
    }
</script>

<style scoped>
    .item-bg-style{
        flex-direction: row;
        padding-top: 35px;
        padding-bottom: 35px;
        margin-bottom: 1px;
        align-items: center;
        justify-content: center;
        background-color: #FFFFFF;
        padding-left: 50px;
        padding-right: 23px;
    }
    .item-title-style{
        color: #999999;
        font-size: 30px;
    }
    .item-content-style{
        color: #333333;
        font-size: 30px;
        flex: 1;
        margin-left: 40px;
    }
    .line-style{
        background-color: #F1F1F1;
        height: 1px;
        margin-left: 50px;
        margin-right: 23px;
    }
</style>
