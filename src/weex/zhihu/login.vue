<template>
    <div class="wrapper">
        <image :src="bgImage" style="width:750px ;height:1334px; position:absolute "></image>
        <div class="base" style="margin-top: 80px;">
            <image :src="closeImage" @click="backPage" class="img1"></image>
            <text class="text">登录</text>
        </div>
        <div class="base" style="justify-content: center;height: 150px">
            <image :src="loginImage" class="img2"></image>
        </div>
        <div class="base" style="justify-content: center;">
            <image :src="userImage" class="img1"></image>
            <input type="number" v-model="username" placeholder="用户名" placeholder-color="#FFF8F8" singleline="true" maxlength="20">
        </div>
        <div class="base" style="justify-content: center;">
            <image :src="psImage" class="img1"></image>
            <input type="password" v-model="password" placeholder="密码" placeholder-color="#FFF8F8" singleline="true" maxlength="20">
        </div>
        <div class="base" style="justify-content: center;">
            <input type="button" value="登录" @click="login" style="background:#c40311" maxlength="18"/>
        </div>
        <div class="base" style="justify-content: center;">
            <input type="button" value="注册" @click="register" style="background:#ffffff" maxlength="18"/>
        </div>
    </div>
</template>

<script>
    import weexUtil from "../util/util";
    //引用weex内置模型
    const modal=weex.requireModule("modal");
    //navigatorweex内置模型主要是控制切换特效的
    var navigator=weex.requireModule("navigator");
    //调用后台方法的固定写法
    var UtilModule=weex.requireModule("UtilModule");
    var self;

    export default {
        name: "login",
        data:{
            closeImage:"",
            loginImage:"",
            userImage:"",
            psImage:"",
            bgImage:''
        },
        created() {
            self=this;
            var imageUrl=weexUtil.imageUrl;
            self.closeImage=imageUrl+"login_close.png";
            self.loginImage=imageUrl+"pg.jpg";
            self.userImage=imageUrl+"login_use.png";
            self.psImage=imageUrl+"login_pwd.png";
            self.bgImage=imageUrl+"background.png";
        },
        methods:{
            login(){
                if(self.username==null||self.username==undefined){
                    modal.toast({message:'请输入账号',duration:1});
                    return ;
                }if(self.password==null||self.password==undefined){
                    modal.toast({message:'请输入密码',duration:1});
                    return;
                }
                var jsonObj={};
                jsonObj.username=self.username;
                jsonObj.mima=self.password;
                //这里是封装的调用后端的方法参数分别是  后端的地址  后端方法名 后端方法的参数 回调函数
                UtilModule.okhttp(self.requestUrl,"weeexlogin",JSON.stringify(jsonObj),function(result){
                    self.setData2UI(result);
                })
            },
            register(){
                navigator.push({
                    url:weexUtil.pushUrl+"weex/zhihu/register.js",
                    animated:true
                },event=>{

                })
            },
            backPage(){
               navigator.push({
                   url:weexUtil.pushUrl+"index.js",
                   animated:true
               },event=>{

                })
            },
            setData2UI(result){
                if(!result==null||!result==undefined){
                    var tempData=JSON.parse(result);
                    if(tempData.restate==1){
                        modal.toast({massage:"登录成功",duration:1});
                        navigator.push({
                            url:weexUtil.pushUrl+"weex/mine/mytab.js",
                            animated:true
                        },event=>{

                        });
                        return ;
                    }
                    modal.toast({massage:"用户名或密码错误",duration:1});
                }
            }
        }
    }
</script>

<style scoped>
    .wrapper{
        flex-direction: column;
    }
    .base{
        flex-direction: row;
        height:100px;
        margin-top: 30px;
    }
    .text{
        font-size: 38px;
        color: white;
    }
    .img1{
        width: 44px;
        height:44px;
        margin: 0 30px;
    }
    .img2{
        width:150px;
        height: 150px;
        border-radius: 75px;
    }
    input{
        font-size: 38px;
        height:86px;
        padding:15px;
    }

</style>