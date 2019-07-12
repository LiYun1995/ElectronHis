<template>
  <div>
    <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </div>
</template>

<script>
const routerTable = require("../../router/mockTree.json");
export default {
  data() {
    return {
      treeData: [],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    handleNodeClick(data) {
      if (data.component !== "Layout") {
        this.$router.push({
          path: `/manage/${data.url}`
        });
        let addTab = {};
        addTab.title = data.label;
        this.$store.state.tabItems.push(addTab);
      }
    }
  },
  mounted() {
    this.treeData = routerTable.data.router;
  }
};
</script>