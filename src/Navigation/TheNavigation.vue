<template>
  <v-card class="TheNavigation">
    <v-navigation-drawer
      app
      permanent
      color="#2B2E4A"
      class="rounded-0"
      width="55"
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img
            src="../assets/WhatsApp Image 2022-02-26 at 4.58.36 PM.jpeg"
          ></v-img>
        </v-list-item-avatar>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item
          :to="item.path"
          v-for="item in items"
          :key="item.title"
          link
          active-class="active"
          class="my-2"
        >
          <v-icon class="icon">{{ item.icon }}</v-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
export default {
  name: "TheNavigation",
  data() {
    return {
      drawer: false,
      items: [
        { title: "من أنا", path: "/", icon: "mdi-shield-account" },
        {
          title: "المهارات ",
          path: "/MySkills",
          icon: "mdi-head-cog-outline",
        },
        {
          title: "المجال العلمي",
          path: "/Experienceandeducation",
          icon: "mdi-school",
        },
        { title: "أعمالي", path: "/MyJobs", icon: "mdi-briefcase" },
      ],
      mini: true,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
.TheNavigation {
  font-family: $fontfamliy;

  .icon {
    color: #fff;
  }
  .active {
    color: #fff !important;
    background-color: $color-1;
  }
  .active {
    background-color: $color-2;
  }
  ::v-deep.theme--light.v-list-item--active:before {
    opacity: 0;
  }
  .title {
    font-family: $fontfamliy !important;
    font-weight: bold;
    font-size: 14px !important;
    height: 20px;
  }
}
</style>
