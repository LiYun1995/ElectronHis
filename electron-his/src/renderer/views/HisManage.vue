<template>
    <div class="manage-main" style="width:100%;height:100%">
        <LeftTree></LeftTree>
        <Content></Content>
    </div>
</template>

<script>
import LeftTree from '@/components/manage/LeftTree'
import Content from '@/components/manage/Content'
    export default {
        name: "HisManage",
        components:{LeftTree,Content}
    }
</script>