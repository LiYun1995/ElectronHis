<template>
  <div :class="[className + 'main']">
    <div :class="[className + 'left']">
      <div :class="[className + 'left-spread']"></div>
      <ul>
        <li v-for="item in firstList">
          <img :src="item.imgUrl" alt />
        </li>
      </ul>
    </div>
    <div v-if="menuContrl" :class="[className + 'right']">
      <div :class="[className+ 'right-title']"></div>
      <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </div>
    <div v-else="menuContrl" :class="[className + 'right']">
      <ul :class="[className + 'right-firstlist']">
        <li v-for="item in firstList" @click="secondShow">{{item.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
const className = "lefttree-";
const routerTable = require("../../router/mockTree.json");
export default {
  data() {
    return {
      className: className,
      firstList: [
        {
          id: "xxxx",
          imgUrl: require("../../assets/img/yonghuming.png"),
          title: "患者档案管理系统"
        },
        {
          id: "xxxx",
          imgUrl: require("../../assets/img/yanzhengma.png"),
          title: "门急症/挂号预约管理系统"
        }
      ],
      menuContrl: false,
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
        // this.$store.state.tabItems.push(addTab);
        this.$store.dispatch("addTabsFun",addTab)
        console.log(this.$store.state.tabItems)
      }
    },
    secondShow() {
      this.menuContrl = !this.menuContrl;
    }
  },
  mounted() {
    this.treeData = routerTable.data.router;
  }
};
</script>