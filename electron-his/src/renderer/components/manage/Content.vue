<template>
  <div :class="[classNames + '-container']">
    <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
      <el-tab-pane v-for="(item,index) in editableTabs" :label="item.title"></el-tab-pane>
    </el-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
const classNames = "his-manage-content";
export default {
  data() {
    return {
      classNames: classNames,
      editableTabsValue: "2",
      editableTabs: [],
      tabIndex: 2
    };
  },
  methods: {},
  mounted() {
    this.editableTabs = this.$store.state.tabItems;
  },
  watch: {
    $route(to, from) {
      console.log(this.$route.path);
      console.log(this.$route.name);
    }
  }
};
</script>
