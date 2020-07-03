<template>
  <div>
    <div class="backtop">↑</div>
  </div>
</template>

<script>
export default {
    name: "BackTop",
};
</script>

<style scoped>
.backtop {
  position: fixed;
  right: 15px;
  bottom: 70px;
  height: 30px;
  width: 30px;
  font-size: 25px;
  text-align: center;
  background: rgb(233, 232, 232);
  border-radius: 50%;
  color: rgb(177, 177, 177);
}
</style>