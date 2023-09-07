<template>
  <movie-detail :dataLokal="detailMovieById"></movie-detail>
</template>

<script>
import MovieDetail from "../MovieDetail.vue";

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
    }
  },
  mounted() {
    this.getDetailFilm();
  }
};
</script>
