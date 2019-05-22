<template>
    <div :class="[classNames + 'choose-container']">
        <h5>连接地址</h5>
        <div :class="[classNames + 'choose-content']">
            <div :class="[classNames + 'choose-content-head']">
                <span>名称</span>
                <span>地址</span>
                <span>选择</span>
            </div>
            <ul>
                <li v-for="item in addressList">
                    <span>{{item.name}}</span>
                    <span>{{item.address}}</span>
                    <input type="checkbox">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    const classNames = 'his-login'
    export default {
        name: "ChooseAddress",
        data(){
            return {
                classNames:classNames,
                addressList:[
                    {
                        name:'23',
                        address:'7.0.0.23:8080/StarTrek'
                    },
                    {
                        name:'116',
                        address:'7.0.0.116:8080/StarTrek'
                    },
                    {
                        name:'111',
                        address:'7.0.0.111:8080/StarTrek'
                    },
                    {
                        name:'117',
                        address:'7.0.0.117:8080/StarTrek'
                    },
                    {
                        name:'120',
                        address:'7.0.0.120:8080/StarTrek'
                    },
                    {
                        name:'120',
                        address:'7.0.0.120:8080/StarTrek'
                    },
                    {
                        name:'120',
                        address:'7.0.0.120:8080/StarTrek'
                    },
                    {
                        name:'120',
                        address:'7.0.0.120:8080/StarTrek'
                    },
                    {
                        name:'120',
                        address:'7.0.0.120:8080/StarTrek'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>