<template>
  <!-- Header Component -->
  <section class="featured">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <nav-movie></nav-movie>
          <div class="section-title">
            <h2>Movie List</h2>
          </div>
          <!-- Genre Component -->
          <div class="kategori">
            <kategori-movie
              v-for="(data, index) in listKategori"
              :key="index"
              :dataKategori="data"
              :index="index"
            ></kategori-movie>
          </div>
        </div>
      </div>
      <!-- Movie List Component -->
      <list-movie></list-movie>
    </div>
  </section>
</template>

<script>
import MovieGenre from "../MovieGenre.vue";
import MovieList from "../MovieList.vue";
import Header from "../Header.vue";

export default {
  data() {
    return {
      listKategori: [
        { name: "All" },
        { name: "Action" },
        { name: "Science Fiction" },
        { name: "Horror" },
        { name: "Thriller" },
        { name: "Comedy" },
        { name: "Romance" },
        { name: "Adventure" },
        { name: "Fantasy" }
      ]
    };
  },
  components: {
    "kategori-movie": MovieGenre,
    "list-movie": MovieList,
    "nav-movie": Header
  }
};
</script>

<style>
.featured {
  padding-top: 30px;
  padding-bottom: 40px;
}
.section-title {
  margin-bottom: 20px;
  text-align: center;
}

.section-title h2 {
  color: #1c1c1c;
  font-weight: 700;
  position: relative;
}
.kategori {
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
  justify-content: center;
}
</style>
