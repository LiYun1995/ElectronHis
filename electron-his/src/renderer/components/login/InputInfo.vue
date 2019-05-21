<template>
    <div :class="[classNames + '-input-container']">
        <Input type="text" width="100%" placeholder="请输入账号" :value="userName" @configEvent="receiveUser"></Input>
        <Input type="password" width="100%" placeholder="请输入密码" @configEvent="receivePass"></Input>
        <div :class="[classNames + '-input-menmer']">
            <input type="checkbox" v-model="checked"></input>
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
    import axios from 'axios'
    const classNames = 'his-login'
    const configAddress = '7.0.0.118:8080/StarTrek'
    export default {
        name: "InputInfo",
        components:{Input,Button},
        data(){
            return {
                classNames:classNames,
                userName:'',
                passWord:'',
                checked:true
            }
        },
        methods:{
            login(){
                console.log(1);
                axios.post(`http://${configAddress}/user/checkLogin`,{
                    username:this.userName,
                    password:this.passWord
                }).then(response => {
                    console.log(response)
                }).catch(error => {
                    console.log(error)
                })
            },
            receiveUser(data){
                this.userName = data
            },
            receivePass(data){
                this.passWord = data
            }
        },
        watch:{
            checked(){
                console.log(this.checked);
                if(this.checked){
                    
                }
            }
        }
    }
</script>

<style scoped>

</style>