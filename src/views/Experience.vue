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
      <!-- <div class="div-itens"> -->
      <v-flex class="itens-div">
        <v-expansion-panels focusable popout multiple>
          <v-expansion-panel v-for="(item, i) in itens" :key="i">
            <v-expansion-panel-header>{{
              item.titulo
            }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list three-line class="descricao-conhecimento">
                <v-list-item
                  v-for="conhecimento in item.conhecimentos"
                  :key="conhecimento.titulo"
                >
                  <v-list-item-avatar>
                    <v-icon class="icons" dark large>
                      {{ conhecimento.icone }}
                    </v-icon>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title
                      v-text="conhecimento.titulo"
                    ></v-list-item-title>

                    <v-list-item-subtitle
                      v-text="conhecimento.descricao"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-flex>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "experience-page",
  data() {
    return {
      itens: [],
      files: [
        {
          color: "blue",
          icon: "mdi-clipboard-text",
          subtitle: "Jan 20, 2014",
          title: "Vacation itinerary",
        },
        {
          color: "amber",
          icon: "mdi-gesture-tap-button",
          subtitle: "Jan 10, 2014",
          title: "Kitchen remodel",
        },
      ],
      folders: [
        {
          subtitle: "Jan 9, 2014",
          title: "Photos",
        },
        {
          subtitle: "Jan 17, 2014",
          title: "Recipes",
        },
        {
          subtitle: "Jan 28, 2014",
          title: "Work",
        },
      ],
    };
  },

  mounted() {
    this.itens = [
      {
        titulo: "Physics",
        descricao: "",
        conhecimentos: [
          {
            titulo: "Mathematical Physics",
            descricao:
              "Strong knowledge of mathematical physics and differential equations. Great experience using special functions, specially Spherical Harmonics, Bessel and Hankel functions.",
            icone: "mdi-math-integral",
          },
          {
            titulo: "Quantum Mechanics",
            descricao:
              "Strong knowledge of quantum mechanics theory. Currently working on non-relativistical scattering theory.",
            icone: "mdi-electron-framework",
          },
          {
            titulo: "Classical Mechanics",
            descricao:
              "Good knowledge of classical mechanics theory, specially with Hamilton, Hamilton-Jacobi and Lagrangian formulations. ",
            icone: "mdi-chart-bell-curve",
          },
        ],
      },
      {
        titulo: "Programming",
        descricao: "",
        conhecimentos: [
          {
            titulo: "Data Structures",
            descricao:
              "Strong knowledge of linked lists, double linked lists, binary trees, stack and queues.",
            icone: "mdi-cable-data",
          },
          {
            titulo: "C Language",
            descricao:
              "Great experience with C language to solve physical and mathematical problems using numerical methods, also using multi-parallel APIs for parallel programming.",
            icone: "mdi-language-c",
          },
          {
            titulo: "C++ Language",
            descricao:
              "Experience using CUDA API for parallel programming using GPGPUs",
            icone: "mdi-language-cpp",
          },
          {
            titulo: "Python",
            descricao:
              "Great experience using libraries for explore, analyse and treating data. Currently working with scientific programming in Python",
            icone: "mdi-language-python",
          },
          {
            titulo: "Fortran",
            descricao:
              "Experience using Fortran-90 to solve math physical and mathematical problem using numerical methods.",
            icone: "mdi-language-fortran",
          },
        ],
      },
      {
        titulo: "Software Development",
        descricao: "",
        conhecimentos: [
          {
            titulo: "Vue.js",
            descricao:
              "All Vue.js ecossystem, including Vue-Router and Vuex, also a Vue UI library Vuetify",
            icone: "mdi-vuejs",
          },
          {
            titulo: "Java",
            descricao:
              "Experience using Java 8+, including Spring framework and Quarkus. I'm currently working on development of REST API's using SpringBoot and Hibernate.",
            icone: "mdi-language-java",
          },
          {
            titulo: "SQL",
            descricao:
              "Experience with MySQL, MariaDB, PostgreSQL and OracleSQL",
            icone: "mdi-database",
          },
          {
            titulo: "JavaScript",
            descricao:
              "Experience with NodeJS framework using Express, also development of automated test using Puppeteer framework",
            icone: "mdi-language-javascript",
          },
        ],
      },
      {
        titulo: "Data Science",
        descricao: "",
        conhecimentos: [
          {
            titulo: "Data analysis",
            descricao:
              "Experience with data analysis. Worked in analysis of perfomance of APIs for parallel computing, analysis of accuracy of monte carlo simulations and more.",
            icone: "mdi-chart-bar",
          },

          {
            titulo: "Data manipulation",
            descricao:
              "Experience with data manipulation, cleaning data and more. Also, great knowledge with methods like regression.",
            icone: "mdi-chart-scatter-plot",
          },
        ],
      },
    ];
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xs;
    },
  },
};
</script>
<style lang="scss" scoped>
.itens-div {
  position: absolute;
  width: 100%;
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

.descricao-conhecimento {
  -webkit-line-clamp: 5;
}

.v-expansion-panel-header {
  height: 80px;
  font-size: 26px;
}

.v-expansion-panel {
  margin-bottom: 20px;
}

.v-list-item__subtitle {
  -webkit-line-clamp: 50 !important;
}
</style>
