<template>
  <div class="MyJobs">
    <v-card width="100%" height="200" flat class="rounded-0" color="#2B2E4A">
      <v-card-title class="justify-center tital-first">
        جميع ملفات أعمالي الدراسية والعملية
      </v-card-title>
      <v-col cols="12">
        <span class="line my-3"></span>
      </v-col>
      <v-col cols="12">
        <v-card-actions class="justify-center">
          <v-avatar class="mx-3 avatar" tile size="50" color="transparent">
            <v-img
              contain
              src="../assets/mortarboard.png"
              alt="../assets/mortarboard.png"
            />
          </v-avatar>
          <v-avatar class="mx-3 avatar" tile size="45" color="transparent">
            <v-img
              contain
              src="../assets/portfolio.png"
              alt="../assets/portfolio.png"
            />
          </v-avatar>
        </v-card-actions>
      </v-col>
    </v-card>

    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-card-title class="tital justify-center">
            البحث العلمي
          </v-card-title>
          <v-card-actions class="justify-center">
            <v-btn
              width="50%"
              color="#2B2E4A"
              dense
              class="btn"
              onClick="window.open('https://drive.google.com/file/d/1t_kDV95es-Pb24CTat9u_7U5JWtSKLv7/view?usp=sharing');"
            >
              رؤية الملف
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "MyJobs",
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";

.MyJobs {
  width: 100%;
  min-height: 100vh;
  background-color: $color-background;
  font-family: $fontfamliy !important;

  .line {
    width: 40px;
    height: 5px;
    background-color: $color-2 !important;
    display: block;
    margin: 0 auto !important;
    border-radius: 15px;
  }
  .tital-first {
    font-size: 30px !important;
    letter-spacing: 0;
    color: $fontcolorsm;
    @media (max-width: 589px) {
      font-size: 25px !important;
    }
    @media (max-width: 496px) {
      font-size: 20px !important;
    }
    @media (max-width: 420px) {
      font-size: 18px !important;
    }
    @media (max-width: 390px) {
      font-size: 16px !important;
    }
  }
  .avatar {
    @media (max-width: 589px) {
      height: 40px !important;
      min-width: 40px !important;
      width: 40px !important;
    }
    @media (max-width: 496px) {
      height: 35px !important;
      min-width: 35px !important;
      width: 35px !important;
    }
    @media (max-width: 390px) {
      height: 25px !important;
      min-width: 25px !important;
      width: 25px !important;
    }
  }
  .tital {
    letter-spacing: 0;
    color: $fontcolor;
  }
  .btn {
    letter-spacing: 0;
    color: $fontcolorsm;
    font-size: 16px;
  }
}
</style>
