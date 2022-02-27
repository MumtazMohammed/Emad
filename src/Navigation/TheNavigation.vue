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
      <v-spacer></v-spacer>
      <!-- contact  -->

      <v-dialog transition="dialog-bottom-transition" max-width="600">
        <template v-slot:activator="{ on, attrs }">
          <v-toolbar
            class="btn-contact-me"
            flat
            color="transparent"
            height="380"
          >
            <v-btn
              elevation="0"
              icon
              small
              class="green lighten-1"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon class="icon-contact" color="white">mdi-phone</v-icon>
            </v-btn>
          </v-toolbar>
        </template>
        <template v-slot:default="dialog">
          <v-card color="#2B2E4A">
            <v-toolbar class="title-contact" color="#E84545">
              مرحباً. أتشرف بك بالتواصل معي
            </v-toolbar>
            <!--  -->
            <v-card color="transparent" flat>
              <v-card-title class="title-contact justify-center">
                تواصل معي على الوتس آب
              </v-card-title>
              <v-card-actions class="justify-center">
                <v-btn
                  href="https://wa.link/mhivo9"
                  width="200"
                  class="social"
                  color="#eee"
                  large
                  outlined
                >
                  <v-icon>mdi-whatsapp </v-icon>
                  <v-spacer></v-spacer>
                  whatsApp
                </v-btn>
              </v-card-actions>
            </v-card>
            <!--  -->
            <v-card color="transparent" flat>
              <v-card-title class="title-contact justify-center">
                تواصل معي على البريد الالكتروني
              </v-card-title>
              <v-card-actions class="justify-center">
                <v-btn
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=archemademin@gmail.com&su=أسئلة عامة&body=مرحباَ"
                  target="_blank"
                  width="200"
                  class="social"
                  color="#eee"
                  large
                  outlined
                >
                  <v-icon>mdi-gmail </v-icon>
                  <v-spacer></v-spacer>
                  Gmail
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-card-actions class="justify-end">
              <v-btn class="close" text @click="dialog.value = false"
                >إغلاق</v-btn
              >
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
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
          title: "المجال العلمي",
          path: "/Experienceandeducation",
          icon: "mdi-school",
        },
        {
          title: "المهارات ",
          path: "/MySkills",
          icon: "mdi-head-cog-outline",
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
.icon-contact {
  font-size: 27px !important;
  animation: icon 2s 0s infinite ease;
}
@keyframes icon {
  5% {
    transform: rotate(5deg);
  }
  10% {
    transform: rotate(-5deg);
  }
  15% {
    transform: rotate(5deg);
  }
  20% {
    transform: rotate(-5deg);
  }
  25% {
    transform: rotate(5deg);
  }
  30% {
    transform: rotate(0deg);
  }
  35% {
    transform: rotate(0deg);
  }
  40% {
    transform: rotate(0deg);
  }
  45% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(5deg);
  }
  55% {
    transform: rotate(-5deg);
  }
  60% {
    transform: rotate(5deg);
  }
  65% {
    transform: rotate(-5deg);
  }
  70% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.item {
  padding-right: 6px;
}
.btn-contact-me::v-deep .v-toolbar__content {
  align-items: end;
  justify-content: center;
}
::v-deep .v-btn--icon.v-size--small {
  width: 40px;
  height: 40px;
}
::v-deep .v-dialog {
  margin: 5px;
}
.title-contact {
  font-family: $fontfamliy !important;
  letter-spacing: 0;
  color: #eee !important;
  font-size: 22px !important;
  letter-spacing: 0px !important;
  @media (max-width: 380px) {
    font-size: 17px !important;
  }
}
.close {
  font-family: $fontfamliy !important;
  letter-spacing: 0;
  color: #eee !important;
  font-size: 20px !important;
}
.social {
  font-family: sans-serif !important;
  letter-spacing: 0;
  color: #eee !important;
  font-size: 17px !important;
}
</style>
