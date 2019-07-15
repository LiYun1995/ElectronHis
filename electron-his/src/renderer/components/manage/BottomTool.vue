<template>
  <div :class="[className + 'main']"></div>
</template>

<script>
const className = "bottomtool-";
export default {
  data() {
    return {
      className: className
    };
  }
};
</script>
