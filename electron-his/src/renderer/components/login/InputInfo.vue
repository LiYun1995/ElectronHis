<template>
    <div :class="[classNames + '-input-container']">
        <Input type="text" width="100%" placeholder="请输入账号" :value="userName" :configEvent="receiveData"></Input>
        <Input type="password" width="100%" placeholder="请输入密码"></Input>
        <div :class="[classNames + '-input-menmer']">
            <input type="checkbox" checked="checked"></input>
            <i>记住我的账号</i>
            {{userName}}
            <a href="#">?</a>
        </div>
        <Button type="default" width="100%" :click="login">登陆</Button>
    </div>
</template>

<script>
    import Input from '../common/Input'
    import Button from '../common/Button'
    const classNames = 'his-login'
    export default {
        name: "InputInfo",
        components:{Input,Button},
        data(){
            return {
                classNames:classNames,
                userName:''
            }
        },
        methods:{
            login(){
                console.log(1);
            },
            receiveData(data){
                console.log(1);
            }
        }
    }
</script>

<style scoped>

</style>