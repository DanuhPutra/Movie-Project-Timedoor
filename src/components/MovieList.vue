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
  props: ["dataKategori"],
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

    filterFilm(value) {
      // const filerGenre = this.dataMovie.filter(data => {
      //   if (value == "All") {
      //     return data.genre;
      //   } else {
      //     return data.genre = this.dataMovie.filter(data => data.genre == value)
      //   }
      // });
      // this.dataMovieFilter = filerGenre;
      // console.log(this.dataMovieFilter);
      if (value == "All") {
        this.dataMovieFilter = this.dataMovie;
      } else {
        this.dataMovieFilter = this.dataMovie.filter(
          data => data.genre == value
        );
      }
    }
  },
  mounted() {
    this.getNewMovie();
    eventBus.$on("menghapusFilm", id => {
      console.log("menerima delete ");
      const filterHapus = this.dataMovie.findIndex(film => id === film.id);
      this.dataMovie.splice(filterHapus, 1);
      this.dataMovieFilter.splice(filterHapus, 1);
      this.$http.delete(
        `https://nanuu-movie-default-rtdb.firebaseio.com/movie/${id}.json`
      );
    });

    eventBus.$on("mengirimGenre", value => {
      this.filterFilm(value);
    });
  }
};
</script>

<style></style>
