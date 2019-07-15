<template>
  <div :class="[className + 'main']">
      <Tabs></Tabs>
  </div>
</template>

<script>
const className = "toptool-";
import Tabs from "@/components/common/Tabs";
export default {
  data() {
    return {
      className: className
    };
  },
  components: { Tabs }
};
</script>
