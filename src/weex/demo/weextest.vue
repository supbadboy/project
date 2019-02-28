<template>
    <div class="wxc-demo">
        <image :src="bgImage" class="img"></image>
        <div>
            <wxc-button text="登录"   type="red" size="full"
                    @wxcButtonClicked="login"></wxc-button>

            <wxc-button text="注册"   type="yellow" size="full"
                        @wxcButtonClicked="register"></wxc-button>

            <wxc-button text="相册返回base64字符"   type="blue" size="full"
                        @wxcButtonClicked="photo"></wxc-button>

            <wxc-button text="相册返回储存路径"   type="white" size="full"
                        @wxcButtonClicked="pic"></wxc-button>

            <wxc-button text="打电话"   type="green" size="full"
                        @wxcButtonClicked="call"></wxc-button>

            <wxc-button text="拍照"   type="red" size="full"
                        @wxcButtonClicked="takeCamera"></wxc-button>

            <wxc-button text="扫码" type="yellow" size="full"
                        @wxcButtonCliked="startScan"></wxc-button>
        </div>
        <scroller class="text">
            <text style="color:red">{{metions}}</text>
        </scroller>
    </div>


</template>

<script>
    import { WxcButton } from 'weex-ui';
    import weexUtil from "../util/util"

    const modal=weex.requireModule("modal");
    var  navigator=weex.requireModule("navigator");
    var UtilModule=weex.requireModule("UtilModule");
    var self;

    export default {
        components:{ WxcButton },
        data(){
            return{
                metions:"",
                bgImage:""
            }
        },
        created(){
           self=this;
           var imgUrl=weexUtil.imageUrl;
           self.bgImage=imgUrl+"background1.jpg";
        },
        methods:{
            login(){
                navigator.push({
                    url:weexUtil.pushUrl+"weex/zhihu/login.js",
                    animated:true
                },event =>{
                    modal.toast({message:"跳转到登录",duration:1})
                })
            },
            register(){
                navigator.push({
                    url:weexUtil.pushUrl+"weex/zhihu/register.js",
                    animated:true
                },event=>{
                    modal.toast({message:"跳转到注册",duration:1})
                })
            },
            photo(){
                UtilModule.photo(function(result){
                    if(result!=null||result!=undefined){
                        self.metions=result;
                    }
                })
            },
            call(){
                UtilModule.call(function(result){
                    if(result!=null||result!=undefined){
                        self.metions=result;
                    }
                })
            },
            pic(){
                UtilModule.photo1(function(result){
                    if(result!=null||result!=undefined){
                        self.metions=result;
                    }
                })
            },
            takeCamera(){
                UtilModule.takeCamera(function(result){
                    if(result!=null||result!=undefined){
                        self.metions=result;
                    }
                })
            },
            startScan(){
                UtilModule.startScan(function(result){
                    if(result!=null||result!=undefined){
                        self.metions=result;
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .wxc-demo{

        align-items: center;
    }
    .text{
        border:5px solid greenyellow;
        width:700px;
        height: 400px;
        background: transparent;
        margin-top: 50px;
    }
    .img{
        width:750px;
        height: 1334px;
        position:absolute;

    }
</style>