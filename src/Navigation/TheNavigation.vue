<template>
  <v-card class="TheNavigation">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      expand-on-hover
      app
      @mouseover.stop="mini = !mini"
      @mouseenter.stop="mini = !mini"
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img
            src="../assets/WhatsApp Image 2022-02-26 at 4.58.36 PM.jpeg"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-title>عماد أمين الحريبي</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item
          :to="item.path"
          v-for="item in items"
          :key="item.title"
          link
          active-class="active"
        >
          <v-list-item-icon>
            <v-icon class="icon">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="title">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
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
    color: $color-2;
  }
  .active {
    color: #fff !important;
    background-color: $color-1;
  }
  .active {
    color: $color-background !important;
    background-color: $color-1;
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
