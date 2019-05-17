<template>
    <div :class="[classNames + 'choose-container']">
        <h1>This is ChooseAddress</h1>
    </div>
</template>

<script>
    const classNames = 'his-login'
    export default {
        name: "ChooseAddress",
        data(){
            return {
                classNames:classNames
            }
        }
    }
</script>

<style scoped>

</style>