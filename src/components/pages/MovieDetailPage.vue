<template>
  <div>
    <movie-detail :dataLokal="detailMovieById"></movie-detail>
    <router-link :to="{ name: 'UpdateMovie' }" @click="getDetailFilmUpdate"
      ><button @click="getDetailFilmUpdate">Edit Data Movie</button>
    </router-link>
  </div>
</template>

<script>
import MovieDetail from "../MovieDetail.vue";
import { eventBus } from "../../main";
export default {
  props: ["dataLokal", "dataInputFilm"],
  data: function() {
    return {
      detailMovieById: {},
      detailMovie: this.$route.params.id
    };
  },
  components: {
    "movie-detail": MovieDetail
  },
  methods: {
    getDetailFilm() {
      this.$http
        .get("https://nanuu-movie-default-rtdb.firebaseio.com/movie.json")
        .then(response => {
          console.log(response.json());
          return response.json();
        })
        .then(inputFilm => {
          console.log(inputFilm);
          for (let itemBuku in inputFilm) {
            if (itemBuku == this.detailMovie) {
              this.detailMovieById = inputFilm[itemBuku];
              console.log(this.detailMovieById);
            }
          }
        });
    },
    getDetailFilmUpdate() {
      console.log("click from detail to update");
      eventBus.$emit("mengirimDetailMovie", this.detailMovieById);
      console.log(this.detailMovieById);
    }
  },
  mounted() {
    this.getDetailFilm();
  }
};
</script>
