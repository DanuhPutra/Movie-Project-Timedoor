<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="header__logo">
            <a href="./index.html"><img src="../assets/logo.png" alt=""/></a>
            <router-link
              :to="{ name: 'NewMovie' }"
              tag="button"
              class="routerBtn"
              >Add New Movie</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
/*---------------------
  Header
-----------------------*/

.header__logo {
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__logo img {
  width: 200px;
  padding-top: 10px;
}

.header__logo a {
  display: inline-block;
}

.header__menu {
  padding: 24px 0;
  display: flex;
  justify-content: right;
}

.header__menu .routerBtn {
  height: 40px;
  border-radius: 20px;
}

.header__menu .routerBtn:hover {
  color: #7fad39;
  background-color: rebeccapurple;
}

.header__menu .routerBtn {
  font-size: 14px;
  color: #252525;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  transition: all, 0.3s;
  padding: 5px 0;
  display: block;
}
</style>
