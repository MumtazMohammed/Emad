<template>
  <v-app class="app">
    <TheNavigation />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import TheNavigation from "../src/Navigation/TheNavigation.vue";
export default {
  components: { TheNavigation },
  name: "App",
};
</script>
<style lang="scss" scoped>
.app {
  width: 100%;
}
</style>
