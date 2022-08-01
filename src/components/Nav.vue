<template>
  <div class="nav">
    <router-link to="/money">
      <svg id="money">
        <use xlink:href="#money"></use>
      </svg>
      记账
    </router-link>
    <router-link to="/labels">标签</router-link>
    <router-link to="/statistics">统计</router-link>
  </div>
</template>

<script lang="ts">
import lebles from "@/assets/icons/labels.svg"
import money from "@/assets/icons/moneybag.svg"
import statistics from "@/assets/icons/statistics.svg"

export default {
  name: 'Nav'
};
</script>

<style lang="scss" scoped>
.nav {
  border: 1px solid red;
}

#money {
  width: 26.25px;
  height: 26.25px;
}

</style>