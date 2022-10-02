<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  }),
  mounted() {
    this.firstPage();
  },
  methods: {
    firstPage() {
      if (this.$route.path == "/")
        this.$router.push({ path: "/information" }).catch((err) => err);
    },
  },
};
</script>
