<template>
  <v-container>
    <div
      id="principal"
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
      <div class="div-avatar">
        <v-avatar class="avatar-img">
          <img src="https://i.imgur.com/RwPB3w7.png" alt="John" />
        </v-avatar>
      </div>
      <v-flex class="descricao">
        <span
          >Hello! My name is Pedro. I am a physicist, data scientist and
          software developer from Brazil.
        </span>
        <span> Get in touch! </span>
      </v-flex>
      <v-flex class="buttons">
        <v-btn
          class="mx-4 botao"
          fab
          dark
          large
          color="transparent"
          href="https://github.com/Shnrqpdr"
          target="_blank"
        >
          <v-icon dark x-large> mdi-github </v-icon>
        </v-btn>
        <v-btn
          class="mx-4 botao"
          fab
          dark
          large
          color="transparent"
          target="_blank"
          href="https://www.linkedin.com/in/santospedrohenrique/"
        >
          <v-icon dark x-large> mdi-linkedin </v-icon>
        </v-btn>
        <v-btn
          class="mx-4 botao"
          fab
          dark
          large
          color="transparent"
          target="_blank"
          href="https://www.instagram.com/hnrqpdr_/"
        >
          <v-icon dark x-large> mdi-instagram </v-icon>
        </v-btn>
        <v-btn
          class="mx-4 botao"
          fab
          dark
          large
          color="transparent"
          target="_blank"
          href="https://twitter.com/henriqdrope"
        >
          <v-icon dark x-large> mdi-twitter </v-icon>
        </v-btn>
      </v-flex>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "home-page",
};
</script>
<style lang="scss" scoped>
.div-avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .avatar-img {
    width: 300px !important;
    height: 240px !important;
  }
}

.buttons {
  width: 100%;
  display: flex;
  justify-content: center;
  .botao {
    border: 1px solid #808080 !important;
    opacity: 0.8 !important;
    padding: 12px;
  }
}

.descricao {
  display: inline-grid;
  text-align: center;
  width: 100%;
  justify-content: center;
  padding: 36px 36px 36px 36px;
  span {
    margin-top: 18px;
    font-size: 24px;
    color: #fff;
  }
}
</style>
