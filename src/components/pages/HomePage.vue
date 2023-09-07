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
          <kategori-movie></kategori-movie>
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
</style>
