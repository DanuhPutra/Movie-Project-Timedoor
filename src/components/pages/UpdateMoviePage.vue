<template>
  <div class="contact-form spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="contact__form__title">
            <h2>Edit Movie Movie</h2>
          </div>
        </div>
      </div>
      <!-- Form Component -->
      <edit-movie :isEdit="true"></edit-movie>
    </div>
  </div>
</template>

<script>
import InputForm from "../inputform.vue";
import { eventBus } from "../../main";
export default {
  data: function() {
    return {
      dataLamaFilm: []
    };
  },
  components: {
    "edit-movie": InputForm
  },
  methods: {
    dataLamaBaru(dataLama) {
      console.log("data lama telah diterima");
      return this.dataLamaFilm == dataLama;
      console.log(this.dataLamaFilm);
    }
  },
  mounted() {
    eventBus.$on("mengirimDetailMovie", dataLama => {
      this.dataLamaBaru(dataLama);
    });
  }
};
</script>

<style>
.contact__form__title {
  margin-bottom: 50px;
  text-align: center;
}

.contact__form__title h2 {
  color: #1c1c1c;
  font-weight: 700;
}

.contact-form {
  padding-top: 80px;
  padding-bottom: 80px;
}

.contact-form form input {
  width: 100%;
  height: 50px;
  font-size: 16px;
  color: #6f6f6f;
  padding-left: 20px;
  margin-bottom: 30px;
  border: 1px solid #ebebeb;
  border-radius: 4px;
}

.contact-form form input::placeholder {
  color: #6f6f6f;
}

.contact-form form textarea {
  width: 100%;
  height: 150px;
  font-size: 16px;
  color: #6f6f6f;
  padding-left: 20px;
  margin-bottom: 24px;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  padding-top: 12px;
  resize: none;
}

.contact-form form textarea::placeholder {
  color: #6f6f6f;
}

.contact-form form button {
  font-size: 18px;
  letter-spacing: 2px;
}
</style>
