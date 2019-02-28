<template>
    <div style="flex-direction: column;background-color: #4E7FFF">
        <div style="flex-direction: row; height: 100px;margin-top: 50px;align-items: center">
            <image :src="displayLoginImage" style="width: 44px; height: 44px; margin-left: 23px" @click="backPage"></image>
            <text style="font-size: 38px; margin-left: 35px; color: white" @click="backPage">登录</text>
        </div>
        <div style="flex-direction: row; justify-content: center">
            <image :src="logoImage" style="width:172px; height: 147px"></image>
        </div>

        <div style="flex-direction: row; height: 129px; margin-top:70px">
            <image :src="userImage" style="width:44px; height: 44px; margin-left: 60px;margin-top: 58px"></image>
            <input :type="text" v-model="account" :placeholder="账号" placeholder-color="#FFF8F8" singleline="true" max-length="20" style="margin-left: 31px;font-size: 32px; color:white;flex: 1;margin-top:33px;margin-right: 60px"/>
        </div>
        <div style="flex-direction: column; height: 1px; background-color: #6892FF; margin-left:60px; margin-right: 60px"></div>

        <div style="flex-direction: row; height: 129px;">
            <image :src="pwdImage" style="width:34px; height: 38px; margin-left: 65px;margin-top: 61px"></image>
            <input :type="password" v-model="pwd" :placeholder="密码" placeholder-color="#FFF8F8" singleline="true" style="margin-left: 36px;font-size: 32px; color:white;flex: 1;margin-top:33px;margin-right: 20px"/>
        </div>
        <div style="flex-direction: column; height: 1px; background-color: #6892FF; margin-left:60px; margin-right: 69px"></div>

        <div style="flex-direction: column;align-items: center;justify-content: center;height:88px;margin-top: 19px;background-color: white;margin-left: 60px;margin-right: 60px;border-radius: 4px" @click="login">
            <text style="font-size: 36px;font-weight: bold;color: #3490FE">登录</text>
        </div>
        <div style="flex-direction: column;align-items: center;justify-content: center;height:88px;margin-top: 40px;margin-left: 60px;margin-right: 60px;border-radius: 4px;border-style:solid;border-width:2px; border-color: white" @click="register">
            <text style="font-size: 36px;font-weight: 500;color: #FFFFFF">注册</text>
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
        data () {
            return{
                displayLoginImage:'',
                logoImage:'',
                userImage:'',
                pwdImage:'',
            }
        },
        created(){
            self = this;
            self.requestUrl = weexUtil.serverUrl;
            this.displayLoginImage = weexUtil.imageUrl+"login_close.png";
            this.logoImage = weexUtil.imageUrl+"login_page.png";
            this.userImage = weexUtil.imageUrl+"login_use.png";
            this.pwdImage = weexUtil.imageUrl+"login_pwd.png";
        },
        methods: {
            login(){
                if(self.account === null || self.account === undefined){
                    modal.toast({message:'请输入账号',duration:1});
                    return;
                }
                if(self.pwd === null || self.pwd === undefined){
                    modal.toast({message:'请输入密码',duration:1});
                    return;
                }
                var jsonObj = {};
                jsonObj.userflag = self.account;
                jsonObj.password = self.pwd;

                UtilModule.okhttp(self.requestUrl,"weexlogin",JSON.stringify(jsonObj),function(result){
                    //设置到UI中
                    self.setData2UI(result);
                });
            },
            register(){
                navigator.push({
                    url:weexUtil.pushUrl + 'weex/login/register.js',
                    animated:true,
                },event=>{
                });
            },
            setData2UI(result){
                if(result !== undefined && result !== null)
                {
                    var tempData = JSON.parse(result);
                    if(tempData.restate == 1)
                    {
                        modal.toast({ message: '登录成功', duration: 1 });
                        navigator.push({
                            url:weexUtil.pushUrl + 'weex/mine/mytab.js',
                            animated:true,
                            data:{
                                userflag:self.account,
                                logintype:false,
                            }
                        },event=>{
                        });
                        return;
                    }
                    modal.toast({ message: tempData.redes, duration: 1 });
                }
            },
        }
    }
</script>

<style scoped>

</style>
