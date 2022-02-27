<template>
  <div id="app">
    <div>
      <v-btn @click="downloadWithAxios()">fdbfgb</v-btn>
      <a
        href="https://drive.google.com/file/d/1t_kDV95es-Pb24CTat9u_7U5JWtSKLv7/view?usp=sharing"
        download
        >PDF</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "https://drive.google.com/file/d/1t_kDV95es-Pb24CTat9u_7U5JWtSKLv7/view?usp=sharing",
    };
  },
};
</script>
