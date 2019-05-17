<template>
    <div :class="[classNames + '-input-container']">
        <Input type="text" width="100%" placeholder="请输入账号"></Input>
        <Input type="password" width="100%" placeholder="请输入密码"></Input>
        <div :class="[classNames + '-input-menmer']">
            <input type="checkbox" checked="checked"></input>
            <i>记住我的账号</i>
            <a href="#">?</a>
        </div>
        <Input type="button" width="100%" value="登陆"></Input>
    </div>
</template>

<script>
    import Input from '../common/Input'
    const classNames = 'his-login'
    export default {
        name: "InputInfo",
        components:{Input},
        data(){
            return {
                classNames:classNames
            }
        }
    }
</script>

<style scoped>

</style>