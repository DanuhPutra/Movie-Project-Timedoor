<template>
  <div class="row featured__filter">
    <!-- Component Item Here -->
    <movie-item
      v-for="(data, index) in dataMovieFilter"
      :key="index"
      :dataLokal="data"
      :index="index"
    ></movie-item>
  </div>
</template>

<script>
import MovieItem from "./MovieItem";
import { eventBus } from "../main";

export default {
  data() {
    return {
      dataMovie: [],
      dataMovieFilter: []
    };
  },
  components: {
    "movie-item": MovieItem
  },
  methods: {
    // filterGenre() {
    //   this.dataLokal.filter(genre => this.dataLokal.genre);
    // },
    getNewMovie() {
      this.$http
        .get("https://nanuu-movie-default-rtdb.firebaseio.com/movie.json")
        .then(response => {
          console.log(response.json());
          return response.json();
        })
        .then(inputMovie => {
          console.log(inputMovie);
          for (let key in inputMovie) {
            const urutanMovie = {
              ...inputMovie[key],
              id: key
            };
            this.dataMovie.push(urutanMovie);
            this.dataMovieFilter.push(urutanMovie);
            console.log(urutanMovie);
          }
        });
    },

    filterFilm() {
      this.dataMovieFilter.filter(data => {
        return;
      });
    }
  },
  mounted() {
    this.getNewMovie();
    eventBus.$on("menghapusFilm", id => {
      console.log("menerima delete ");
      const filterHapus = this.dataMovie.findIndex(film => id === film.id);
      this.dataMovie.splice(filterHapus, 1);
      this.$http.delete(
        `https://nanuu-movie-default-rtdb.firebaseio.com/movie/${id}.json`
      );
    });
  }
};
</script>

<style></style>
