<template>
  <div class="manage-main" style="width:100%;height:100%">
    <TopTool></TopTool>
    <div class="manage-content">
      <LeftMenu></LeftMenu>
       <Content></Content>
    </div>
    <BottomTool></BottomTool>
  </div>
</template>

<script>
import Content from "@/components/manage/Content";
import LeftMenu from "@/components/manage/LeftMenu";
import TopTool from "@/components/manage/TopTool";
import BottomTool from "@/components/manage/BottomTool";
const routerTable = require("../router/mockTree.json");
const formatRoutes = require("../router/getRouter");
export default {
  name: "HisManage",
  components: { Content, LeftMenu, TopTool, BottomTool },
  data() {
    return {};
  },
  mounted() {
    let myrouter = formatRoutes.formatRoutes(routerTable.data.router);
    this.$router.addRoutes([
      {
        path: "/manage",
        component: require("@/views/HisManage").default,
        children: myrouter
      }
    ]);
  },
  watch: {
    $route(to, from) {
      // console.log(this.$route.path);
    }
  }
};
</script>