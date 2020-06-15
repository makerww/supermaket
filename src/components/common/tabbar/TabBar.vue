/*
 * @Author: wq
 * @Date: 2020-06-12 10:49:05
 * @Last Modified by: wq
 * @Last Modified time: 2020-06-12 10:49:17
 */
<template>
  <div id="tab-bar">
    <tab-bar-item
      v-for="(item,index) in itemList"
      :path="item.pathName"
      :color="item.textColor"
      :key="index"
    >
      <template v-slot:item-icon>
        <img :src="item.itemIcon" alt />
      </template>
      <template v-slot:item-icon-active>
        <img :src="item.itemIconACtive" alt />
      </template>
      <template v-slot:item-text>{{ item.itemText }}</template>
    </tab-bar-item>
  </div>
</template>

<script>
import TabBarItem from "components/common/tabbar/TabBar_Item";
export default {
  name: "TabBar",
  data() {
    return {};
  },
  props: {
    itemList: {
      type: Array,
      default: () => {
        return [
          {
            pathName: "Profile",
            itemIcon: require("@/assets/img/tabbar/profile.png"),
            itemIconACtive: require("@/assets/img/tabbar/profile_active.png"),
            itemText: "我的",
            textColor: "red"
          }
        ];
      }
    }
  },
  components: {
    TabBarItem
  }
};
</script>

<style>
#tab-bar {
  display: flex;
  background: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -3px 1px rgba(100, 100, 100, 0.1);
}
</style>