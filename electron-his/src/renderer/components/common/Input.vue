<template>
    <div>
        <input :class="getClass" :type="this.type" :placeholder="this.placeholder" :style="getStyles" :value="this.value"></input>
    </div>
</template>

<script>
    const componentsClassName = 'his-components'
    export default {
        name: "Input",
        props: {
            type: {
                type: String,
                default: 'text'
            },
            width: {
                type: [Number, String],
                default: '100%'
            },
            placeholder: {
                type: String,
                default: '请输入'
            },
            value:{
                type:String
            }
        },
        computed: {
            getClass() {
                return `${componentsClassName}-${this.type} his-components-inputcommon`
            },
            getStyles() {
                if (this.width.indexOf('p') !== -1) {
                    return {width: this.width}
                } else if (this.width.indexOf('%') !== -1) {
                    return {width: this.width}
                }
                return {width: this.width + 'px'}
            }
        },
        mounted() {
            console.log(this.width.split('%').length);
        }
    }
</script>

<style scoped>

</style>