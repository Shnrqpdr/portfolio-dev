<template>
  <v-app>
    <v-main class="main-div">
      <v-flex class="cabecalho">
        <div v-if="!isMobile" class="name-nav-bar">
          <span class="routes-nav-bar">Pedro Henrique dos Santos Cunha</span>
        </div>

        <v-spacer v-if="!isMobile"></v-spacer>
        <div class="content-nav-bar">
          <router-link :to="'/'" class="routes-nav-bar">Experience</router-link>
          <router-link :to="'/'" class="routes-nav-bar">Articles</router-link>
          <router-link :to="'/'" class="routes-nav-bar">Contact</router-link>
          <router-link :to="'/'" class="routes-nav-bar">About</router-link>
        </div>
      </v-flex>
      <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="particles"
      >
      </vue-particles>

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
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xs;
    },
  },
};
</script>
<style lang="scss" scoped>
.content-nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.routes-nav-bar {
  font-size: 20px;
  color: #ffffff;
  text-decoration: none;
  padding: 8px;
  cursor: pointer;
}

.name-nav-bar {
  display: flex;
  align-items: center;
}

.nav-bar {
  background-color: transparent !important;
  box-shadow: none !important;
  position: relative;
}
.home {
  height: 100%;
  width: 100%;
}

.main-div {
  z-index: 999;
}
.particles {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: -50px;
  z-index: 1;
  overflow: hidden;
  margin-top: 60px;
}
.container {
  z-index: 999;
  position: absolute;
  top: 40%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%) !important;
}

.cabecalho {
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 999;
  padding: 12px;
  position: absolute;
}
</style>
