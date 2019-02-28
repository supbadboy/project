<template>
    <div style="flex-direction: column; background-color: white">

        <div style="height: 100px;width: 750px;flex-direction: row;align-items: center;background-color: #4E7FFF;">
            <image :src="closeImage" style="width: 44px; height: 44px; margin-left: 23px" @click="backPage"></image>
            <text style="color: #FFFFFF;font-size: 38px;margin-left: 30px;flex: 1;">注册</text>
        </div>

        <div style="flex-direction: row; height: 149px; ">
            <image :src="phoneImage" style="height: 44px;width: 44px; margin-top: 77px;margin-left: 60px"></image>
            <input type="number" v-model="account" placeholder="输入用户名" placeholder-color="#B8BDCD" singleline="true" style="margin-left: 31px;font-size: 32px; color:#333333;flex: 1;margin-top:50px;margin-right: 20px"/>
        </div>
        <div style="margin-left: 60px; margin-right: 60px;height: 1px; background-color: #F1F1F1"></div>

        <div style="flex-direction: row; height: 131px; ">
            <image :src="pwdImage" style="height: 44px;width: 44px; margin-top: 59px;margin-left: 60px"></image>
            <input type="password" v-model="pwd" placeholder="输入密码" placeholder-color="#B8BDCD" singleline="true" style="margin-left: 31px;font-size: 32px; color:#b8bdcd;flex: 1;margin-top:30px;margin-right: 20px"/>
        </div>
        <div style="margin-left: 60px; margin-right: 60px;height: 1px; background-color: #F1F1F1"></div>

        <div style="flex-direction: row; height: 128px; ">
            <image :src="pwdImage" style="height: 44px;width: 44px; margin-top: 59px;margin-left: 60px"></image>
            <input type="password" v-model="oldpwd" placeholder="确认密码" placeholder-color="#B8BDCD" singleline="true" style="margin-left: 31px;font-size: 32px; color:#333333;flex: 1;margin-top:30px;margin-right: 20px"/>
        </div>
        <div style="margin-left: 60px; margin-right: 60px;height: 1px; background-color: #F1F1F1"></div>

        <div style="flex-direction: row; margin-left: 56px;margin-top: 23px">
            <image :src="protocolImage" style="width:32px; height: 32px" @click="selectProtocol"></image>
            <text style="font-size:24px; color: #999999;margin-left: 7px" @click="selectProtocol">我已阅读并同意</text>
            <text style="font-size: 24px;color: #489EFF" @click="registerProtocolClick">&lt;&lt;用户注册协议&gt;&gt;</text>
        </div>

        <div style="flex-direction: column;height: 88px;margin-left: 60px; margin-right: 60px; margin-top: 100px;background-color: #4E7FFF;align-items:center;justify-content: center;border-radius: 4px " @click="register">
            <text style="font-size: 36px; font-weight: bold; color: #FFFFFF">完成注册</text>
        </div>
    </div>
</template>

<script>
    import weexUtil from '../util/util';
    const modal = weex.requireModule('modal');
    var navigator = weex.requireModule('navigator');
    var UtilModule = weex.requireModule('UtilModule');
    var self;
    export default {
        components:{

        },
        data() {
            return {
                closeImage: '',
                phoneImage: '',
                pwdImage: '',
                protocolImage:'',
                requestUrl:'',
                isStartTimer : false,
                millisecond : 60,
                isAgreeRegister : false,
            }
        },
        created() {
            self = this;
            self.requestUrl = weexUtil.serverUrl;
            this.closeImage = weexUtil.imageUrl + "login_close.png";
            this.phoneImage = weexUtil.imageUrl + "peccancy_detail_police.png";
            this.pwdImage = weexUtil.imageUrl+"car_instance_icon.png";
            this.protocolImage = weexUtil.imageUrl + "protocol_select.png";
        },
        methods: {
            backPage() {
                navigator.pop({
                    animated: "true"
                }, event => {
                });
            },
            selectProtocol() {
                self.isAgreeRegister = !self.isAgreeRegister;
                self.protocolImage = weexUtil.imageUrl + (self.isAgreeRegister ? "protocol_unselect.png" : "protocol_select.png");
            },
            register() {
                if(self.account === null || self.account === undefined){
                    modal.toast({message:'请输入账号',duration:1});
                    return;
                }
                if(self.pwd === null || self.pwd === undefined){
                    modal.toast({message:'请输入密码',duration:1});
                    return;
                }
                if(self.oldpwd === null || self.oldpwd === undefined){
                    modal.toast({message:'请输入密码',duration:1});
                    return;
                }
                if(self.pwd != self.oldpwd){
                    modal.toast({message:'两次输入的密码不一致',duration:1});
                    return;
                }
                if(self.isAgreeRegister) {
                    modal.toast({message:'请同意注册协议', duration:1});
                    return;
                }

                var jsonObj = {};
                jsonObj.userflag = self.account;
                jsonObj.password = self.pwd;
                jsonObj.oldpassword = self.oldpwd;

                UtilModule.okhttp(self.requestUrl,"weexregister",JSON.stringify(jsonObj),function(result){
                    //设置到UI中
                    self.setData2UI(result);
                });
            },
            setData2UI(result){
                if(result !== undefined && result !== null)
                {
                    var tempData = JSON.parse(result);
                    if(tempData.restate == 1)
                    {
                        modal.toast({ message: '恭喜您，注册成功', duration: 1 });
                        navigator.pop({
                            animated: "true"
                        }, event => {
                        });
                        return;
                    }
                    modal.toast({ message: tempData.redes, duration: 1 });
                    return;
                }
                modal.toast({ message: '注册失败', duration: 1 });
            },

        }
    }
</script>

<style>

</style>
