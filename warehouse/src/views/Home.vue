<template>
  <div class="great_container">
    <div class="naviation_container">Cooperation make better</div>
    <RouterView></RouterView>
  </div>
</template>
<script setup></script>
<style>
body {
  padding: 0px;
  box-sizing: border-box;
  border: 0px;
  margin: 0px;
}
.great_container {
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: rgb(0, 0, 0);
  border: 0px;
  flex-direction: column;
}
.naviation_container {
  display: flex;
  height: 6%;
  width: 100%;
  position: relative;
  color: rgb(255, 255, 255);
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}
</style>
