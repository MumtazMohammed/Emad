<template>
  <div class="Experienceandeducation">
    <v-container>
      <v-row class="mb-8">
        <v-col cols="12">
          <v-card-title class="justify-center"> التعليم الاكاديمي</v-card-title>
          <span class="line"></span>
        </v-col>
      </v-row>
      <v-row class="mb-2">
        <v-col class="py-1" cols="12">
          <v-card-title class="title py-2">
            <span class="ml-2 span orange--text text--darken-4">1</span
            >بكالوريوس هندسة المعمارية جامعة العلوم والتكنولوجيا 2014 - Feb 2019
          </v-card-title>
        </v-col>
        <v-col class="py-1" cols="12">
          <v-card-title class="title py-2">
            <span class="ml-2 span orange--text text--darken-4">2</span>
            ثانوية عامة ثانوية الفهد - المملكة العربية السعودية Feb 2013 - Feb
            2011
          </v-card-title>
        </v-col>
      </v-row>
      <!--  -->
      <v-divider></v-divider>
      <!--  -->
      <v-row class="mb-8">
        <v-col cols="12">
          <v-card-title class="justify-center"> الدورات التدريبية</v-card-title>
          <span class="line"></span>
        </v-col>
      </v-row>
      <v-row class="mb-2">
        <v-col class="py-1" cols="12" md="4" sm="6">
          <v-card-title class="title py-2">
            <span class="ml-2 span orange--text text--darken-4">1</span> الرخصة
            الدولية لقياده الحاسوب
          </v-card-title>
          <v-card-text class="pb-2"> ( جامعة العلوم والتكنولوجيا )</v-card-text>
        </v-col>
        <v-col class="py-1" cols="12" md="4" sm="6">
          <v-card-title class="title py-2">
            <span class="ml-2 span orange--text text--darken-4">2</span>
            عددة دورات للغه الانجليزية
          </v-card-title>
          <v-card-text class="pb-2">( جامعة العلوم والتكنولوجيا ) </v-card-text>
        </v-col>
        <v-col class="py-1" cols="12" md="4" sm="6">
          <v-card-title class="title py-2">
            <span class="ml-2 span orange--text text--darken-4">3</span> دورات
            تدريبية للبرامج الهندسية
          </v-card-title>
          <v-card-text class="pb-2"
            >وحدة التدريب التطبيقي - دايمز للهندسة</v-card-text
          >
        </v-col>
      </v-row>
      <!--  -->
      <v-divider></v-divider>
      <!--  -->
      <v-row class="mb-8">
        <v-col cols="12">
          <v-card-title class="justify-center"> الخبرات العملية</v-card-title>
          <span class="line"></span>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="py-1" cols="12">
          <v-card-title class="title py-2">
            <span class="ml-2 span orange--text text--darken-4">1</span> الرخصة
            مهندس معماري , عمل حر | جدة
          </v-card-title>
        </v-col>
        <v-col class="py-1" cols="12">
          <v-card-title class="title py-2">
            <span class="ml-2 span orange--text text--darken-4">2</span>
            مهندس معماري, مكتب عبدالعزيز الجهني للاستشارات الهندسية 2020 2021 |
            جدة
          </v-card-title>
        </v-col>
        <v-col class="py-1" cols="12">
          <v-card-title class="title py-2">
            <span class="ml-2 span orange--text text--darken-4">3</span> دورات
            مهندس معماري, 3D ART 2021 2021 | جدة
          </v-card-title>
        </v-col>
        <v-col class="py-1" cols="12">
          <v-card-title class="title py-2">
            <span class="ml-2 span orange--text text--darken-4">4</span> دورات
            مهندس معماري, نور بان للاستشارات الهندسية 2021 2022 | جدة
          </v-card-title>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "ExperienceAndEducation",
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
.Experienceandeducation {
  width: 100%;
  min-height: 130vh;
  padding: $padding;
  font-family: $fontfamliy !important;
  background-color: $color-background;

  .line {
    width: 40px;
    height: 5px;
    background-color: $color-2 !important;
    display: block;
    margin: 0 auto !important;
    border-radius: 15px;
  }
  .title {
    letter-spacing: 0;
    font-family: $fontfamliy !important;
    font-size: 16px !important;
    // height: 100px;
    position: relative;
    @media (max-width: 700px) {
      font-size: 15px !important;
    }
    @media (max-width: 559px) {
      font-size: 17px !important;
    }
    @media (max-width: 380px) {
      font-size: 15px !important;
    }
  }

  .span {
    display: inline-block;
    font-size: 18px;
    font-weight: 500;
  }
}
</style>
