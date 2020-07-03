<template>
  <div>
    <div class="goods-list-item">
      <div class="goods-img-div">
        <img src="./pic.png" alt />
      </div>
      <div class="goods-img-div">
        <slot name="item-text"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {}
};
</script>

<style>
.goods-list-item {
  width: 100%;
  height: 150px;
  font-size: 20px;
  margin-bottom: 20px;
  display: flex;
}
.goods-img-div {
  flex: 1;
  height: 100%;
}
.goods-img-div img {
  width: 100%;
  height: 150px;
}
</style>