<template>
  <v-container id="principal" class="container-principal">
    <div
      v-motion-pop
      :initial="{
        scale: 0,
      }"
      :enter="{
        scale: 1,

        transition: {
          delay: 500,
          duration: 800,
        },
      }"
    >
      <!-- <v-flex class="itens-div"
        ><div
          style="
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
          "
        >
          Comming soon!
        </div></v-flex
      > -->
      <v-row class="itens-div">
        <v-col cols="12" sm="6">
          <v-card
            width="100%"
            @click="
              redirect(
                'https://dev.to/hnrqpdr/how-to-add-custom-events-in-vue-3-using-typescript-5931'
              )
            "
          >
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://imagizer.imageshack.com/img922/2470/5lB4su.jpg"
            >
              <v-card-title
                >How to add custom events in Vue 3 using
                TypeScript</v-card-title
              >
            </v-img>
          </v-card></v-col
        >
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "articles-page",
  data() {
    return {
      itens: [],
    };
  },

  mounted() {},
  methods: {
    redirect(url) {
      window.location.href = url;
    },
  },
};
</script>
<style lang="scss" scoped>
.itens-div {
  position: absolute;
  width: 100%;
  padding-right: 20px;
  height: 100%;

  @media screen and (max-width: 600px) {
    padding-right: 0px;
    padding-left: 20px;
  }
}

.container-principal {
  z-index: 999;
  position: absolute;
  top: 10%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%) !important;
}

.icons {
  background-color: none !important;
  border-color: none !important;
}
</style>
