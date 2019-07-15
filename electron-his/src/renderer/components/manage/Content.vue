<template>
  <div :class="[classNames + 'main']">
    <router-view></router-view>
  </div>
</template>

<script>
const classNames = "hisContent-";
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
      // console.log(this.$route.path);
      // console.log(this.$route.name);
    }
  }
};
</script>
