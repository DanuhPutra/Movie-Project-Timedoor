<template>
  <div class="featured__controls">
    <p>{{ dataKategori.name }}</p>
  </div>
</template>

<script>
export default {
  props: ["dataLokal", "dataKategori"],
  data() {
    return {
      genreFilter: { filtered: "" }
    };
  },
  methods: {
    pindahGenre() {
      console.log("pindah");
    }
  }
};
</script>

<style scoped>
.featured__controls {
  text-align: center;
  margin-bottom: 50px;
}

.featured__controls p {
  cursor: pointer;
  padding: 20px 30px;
}

.featured__controls p.active:after {
  opacity: 1;
}

.featured__controls p:after {
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background: #7fad39;
  content: "";
  opacity: 0;
}

.featured__controls p:hover {
  color: aqua;
  background-color: #7fad39;
  padding: 20px 30px;
  border-radius: 20px;
}
</style>
