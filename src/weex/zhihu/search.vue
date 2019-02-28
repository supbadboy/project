<template>
    <div class="box">
            <wxc-tab-bar :tab-titles="tabTitles"
                         :tab-styles="tabStyles"
                         title-type="icon"
                         @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
                <div class="item-container" >
                    <text>搜索</text>
                    <input type="text" />
                </div>

                <div class="item-container" >

                </div>

                <div class="item-container" >

                </div>

                <div class="item-container" >

                </div>

                <div class="item-container" >

                </div>
            </wxc-tab-bar>
    </div>
</template>

<style scoped>
    .item-container {
        width: 750px;

    }

</style>
<script>
    import { WxcTabBar, Utils } from 'weex-ui';
    import Config from "../config"

    export default {
        components: { WxcTabBar },
        data: () => ({
            tabTitles: Config.tabTitles,
            tabStyles: Config.tabStyles,
            value:""
        }),
        created () {
            const tabPageHeight = Utils.env.getPageHeight();
            // If the page doesn't have a navigation bar
            // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
            const { tabStyles } = this;
            this.contentStyle = { height: (tabPageHeight - tabStyles.height) + 'px' };
        },
        methods: {
            wxcTabBarCurrentTabSelected (e) {
                const index = e.page;
                // console.log(index);
            },
            wxcSearchbarInputOnInput(e){
                this.value=e.value;
            }

        }
    };
</script>