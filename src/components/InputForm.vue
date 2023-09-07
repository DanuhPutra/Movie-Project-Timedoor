<template>
  <form>
    <div class="row">
      <div class="col-lg-4 col-md-4">
        <input
          type="text"
          placeholder="Movie Name"
          v-model="dataInputFilm.name"
        />
      </div>
      <div class="col-lg-4 col-md-4">
        <input
          type="text"
          placeholder="Image Link"
          v-model="dataInputFilm.imgUrl"
        />
      </div>
      <div class="col-lg-4 col-md-4">
        <input
          type="text"
          placeholder="Release Year"
          v-model="dataInputFilm.rilis"
        />
      </div>
      <div class="genre__input__checkbox">
        <label>
          <input
            type="radio"
            name="genre"
            value="Action"
            v-model="dataInputFilm.genre"
          />
          Action
        </label>
        <label>
          <input
            type="radio"
            name="genre"
            v-model="dataInputFilm.genre"
            value="Science Fiction"
          />
          Science Fiction
        </label>
        <label>
          <input
            type="radio"
            name="genre"
            v-model="dataInputFilm.genre"
            value="Horror"
          />
          Horror
        </label>
        <label>
          <input
            type="radio"
            name="genre"
            v-model="dataInputFilm.genre"
            value="Thriller"
          />
          Thriller
        </label>
        <label>
          <input
            type="radio"
            name="genre"
            v-model="dataInputFilm.genre"
            value="Comedy"
          />
          Comedy
        </label>
        <label>
          <input
            type="radio"
            name="genre"
            v-model="dataInputFilm.genre"
            value="Romance"
          />
          Romance
        </label>
        <label>
          <input
            type="radio"
            name="genre"
            v-model="dataInputFilm.genre"
            value="Adventure"
          />
          Adventure
        </label>
        <label>
          <input
            type="radio"
            name="genre"
            v-model="dataInputFilm.genre"
            value="Fantasy"
          />
          Fantasy
        </label>
      </div>
      <div class="col-lg-12 text-center">
        <textarea
          placeholder="Your Review"
          v-model="dataInputFilm.komentar"
        ></textarea>
        <button v-on:click.prevent="postFilm()" class="site-btn">
          Add Review
        </button>
      </div>
    </div>
  </form>
</template>

<!-- v-on:click.prevent="newData" -->

<script>
import { eventBus } from "../main";

export default {
  data() {
    return {
      dataInputFilm: {
        name: "",
        imgUrl: "",
        genre: "",
        rilis: "",
        komentar: "",
        genre: ""
      }
    };
  },
  methods: {
    postFilm() {
      this.$http
        .post(
          "https://nanuu-movie-default-rtdb.firebaseio.com/movie.json",
          this.dataInputFilm
        )
        .then(
          () => {
            this.tambahFilm();
          },
          error => {
            console.log(error);
          }
        );
    },
    tambahFilm() {
      console.log("click");
      this.$router.back();
    }
  }
};
</script>

<style>
.genre__input input.genre__input__add {
  margin-bottom: 20px;
}

.genre__input input::placeholder {
  color: #b2b2b2;
}

.genre__input__checkbox {
  margin-bottom: 10px;
}

.genre__input__checkbox label {
  position: relative;
  font-size: 16px;
  color: #1c1c1c;
  padding-left: 30px;
  cursor: pointer;
}

.genre__input__checkbox label input {
  width: 20px;
  height: 20px;
}
</style>
