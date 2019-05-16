<template>
    <div :class="[classNames + 'container']">
        <div :class="[classNames + '-top']">
            <h1>LYGG</h1>
        </div>
        <div :class="[classNames + '-logo']"></div>
        <div :class="[classNames + '-content']"></div>
    </div>
</template>

<script>
    const classNames = 'his-login'
    export default {
        name: "Login",
        data() {
            return {
                classNames: classNames
            }
        }
    }
</script>