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
      <v-flex class="itens-div"
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
      >
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
};
</script>
<style lang="scss" scoped>
.itens-div {
  position: absolute;
  width: 100%;
  padding-right: 20px;
  height: 100%;
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
