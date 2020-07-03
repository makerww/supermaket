<template>
  <div id="goods-list">
    <goods-list-item v-for=" (item,index) in data" :key="index">
      <template v-slot:item-text>{{item}}</template>
    </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  props: {
    data: {
      type: Array,
      default: new Array()
    }
  },
  components: {
    GoodsListItem
  }
};
</script>

<style>
#goods-list {
  background: #f6f6f6;
}
</style>