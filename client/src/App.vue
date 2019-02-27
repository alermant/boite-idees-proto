<template>
  <div id="app">
    <div id="nav">
      <div class="logo"></div>
      <div class="block-link">
        <router-link to="/">Accueil</router-link>
        <router-link to="/ideas-analysis">Mes idées</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
    <router-view/>
    <div id="footer">© 2019 Bai</div>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  width: 100%;
  height: 90px;
  box-shadow: 0px -33px 75px 10px black;
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
#nav .logo {
  background-image: url("assets/logo.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100px;
  height: 70px;
}

#nav .block-link {
  display: flex;
}
#nav .block-link a {
  margin-left: 40px;
  font-weight: bold;
  color: #2c3e50;
}

#nav .block-link a::after {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  background-color: #2c3e50;
  border-radius: 8px;
  margin-top: 5px;
  transition: 0.5s;
  transform: scaleX(0);
}
#nav .block-link a:hover::after {
  transform: scaleX(1);
}
#nav .block-link a.router-link-exact-active {
  color: #0f92dd;
}
#nav .block-link a.router-link-exact-active::after {
  background-color: #0f92dd;
  transform: scaleX(1);
}
#footer {
  padding: 15px;
}
</style>
