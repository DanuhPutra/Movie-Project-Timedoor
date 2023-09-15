<template>
  <div class="featured__controls">
    <p @click="mengirimGenre">{{ dataKategori.name }}</p>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  props: ["dataLokal", "dataKategori"],
  data() {
    return {
      genreFilter: { filtered: "" },
      kategoriValue: [""]
    };
  },
  methods: {
    // pindahGenre() {
    //   console.log("pindah");
    // },
    mengirimGenre() {
      eventBus.$emit("mengirimGenre", this.dataKategori.value);
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
