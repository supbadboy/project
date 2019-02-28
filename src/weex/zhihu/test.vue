<template>
    <div class="container">
        <div class="demo">
            <wxc-searchbar ref="wxc-searchbar"
                           @wxcSearchbarCancelClicked="wxcSearchbarCancelClicked"
                           @wxcSearchbarInputReturned="wxcSearchbarInputReturned"
                           @wxcSearchbarInputOnInput="wxcSearchbarInputOnInput"
                           @wxcSearchbarCloseClicked="wxcSearchbarCloseClicked"
                           @wxcSearchbarInputOnFocus="wxcSearchbarInputOnFocus"
                           @wxcSearchbarInputOnBlur="wxcSearchbarInputOnBlur"></wxc-searchbar>
            <text class="value-text">{{value}}</text>
        </div>
        <wxc-tab-bar :tab-titles="tabTitles"
                     :tab-styles="tabStyles"
                     title-type="icon"
                     @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
            <div class="item-container" :style="contentStyle"><text>1</text></div>

            <div class="item-container" :style="contentStyle"><text>2</text></div>

            <div class="item-container" :style="contentStyle"><text>3</text></div>

            <div class="item-container" :style="contentStyle"><text>4</text></div>

            <div class="item-container" :style="contentStyle"><text>5</text></div>
        </wxc-tab-bar>
    </div>
</template>
<script>

    import { WxcSearchbar ,Utils,WxcTabBar} from 'weex-ui';
    import Config from  "../config";
    export default {
        components: { WxcSearchbar,WxcTabBar },
        data: () => ({
            value: '',
            tabTitles: Config.tabTitles,
            tabStyles: Config.tabStyles,
        }),
        created(){
            const tabPageHeight = Utils.env.getPageHeight();
            const { tabStyles } = this;
            this.contentStyle = { height: (tabPageHeight - tabStyles.height-100) + 'px' };
        },
        methods: {
            wxcSearchbarInputOnFocus () {
            },
            wxcSearchbarInputOnBlur () {
            },
            wxcSearchbarInputReturned (){
            },
            wxcSearchbarCloseClicked () {
            },
            wxcSearchbarInputOnInput (e) {
                this.value = e.value;
            },
            wxcSearchbarCancelClicked () {
            },
        }
    };
</script>