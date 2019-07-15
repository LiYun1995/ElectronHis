<template>
  <div :class="[className + 'main']">
	  <ul>
		  <li v-for="item in tabList">
			  {{item}}
		  </li>
	  </ul>
  </div>
</template>

<script>
const className = "tabs-";
export default {
  data() {
    return {
	  className: className,
	  tabList:[]
    };
  },
  mounted(){
	  this.tabList = this.$store.state.tabItems;
  }
};
</script>
