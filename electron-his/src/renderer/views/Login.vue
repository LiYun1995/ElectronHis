<template>
    <div :class="[classNames + '-container']">
        <div :class="[classNames + '-top']">
            <span :class="[classNames + '-topborder']"></span>
            <div :class="[classNames + '-toptools']">
                <span :class="[classNames + '-min']" @click="minWindow">-</span>
                <span :class="[classNames + '-close']" @click="closeWindow">×</span>
            </div>
        </div>
        <div :class="[classNames + '-midcontainer']">
            <div :class="[classNames + '-logo']">
                <img src="../assets/img/signLogin.png" ref="logo">
            </div>
            <div :class="[classNames + '-content']">
                <div :class="[classNames+'-select']">
                    <router-link :to="thisRoute" style="float: left" @click="toggleDom">
                        <i class="his-icon-down" @click="toggleDom"></i>
                    </router-link>
                    <span>{{addressNum}}</span>
                    <router-link :to="thisRoute" style="float: right" @click="toggleDom">
                        <i class="his-icon-address" @click="toggleDom"></i>
                    </router-link>
                </div>
                <div :class="[classNames + '-userinfo']">
                <router-view></router-view>
                </div>
                <div :class="[classNames + '-another']">
                <router-link to="#">使用USBkey（U盾）证书登陆</router-link>
                <router-link to="#">无法登陆</router-link>
                <router-link to="#">帮助与支持中心</router-link>
                </div>
            </div>
            <div :class="[classNames + '-buttominfo']">
                <a>关于华创ICMIS</a>
                <span>Copyright @2014 - 2017 Genesis.com All Rights Reserved</span>
            </div>
        </div>
    </div>
</template>

<script>
    import InputInfo from '../components/login/InputInfo'
    import ChooseAddress from '../components/login/ChooseAddress'

    const {remote,ipcRenderer} = require('electron')
    const classNames = 'his-login'
    export default {
        name: "Login",
        components: {InputInfo, ChooseAddress},
        data() {
            return {
                classNames: classNames,
                addressNum: 0,
                thisRoute:'/input'
            }
        },
        methods: {
            toggleDom() {
                if(this.thisRoute === '/input'){
                    this.thisRoute = '/chooseAddress'
                }else{
                    this.thisRoute = '/input'
                }
            },
            minWindow(){
                remote.getCurrentWindow().minimize();
            },
            closeWindow(){
                remote.getCurrentWindow().close();
            }
        },
        computed:{

        },
        watch:{

        },
        mounted() {

        }
    }
</script>