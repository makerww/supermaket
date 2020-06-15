<template>
  <div>
    <tab-bar :itemList="menuList"></tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
export default {
  name: "MainTabBar",
  components: {
    TabBar
  },
  data() {
    return {
      menuList: [
        {
          pathName: "Home",
          itemIcon: require("assets/img/tabbar/home.png"),
          itemIconACtive: require("assets/img/tabbar/home_active.png"),
          itemText: "首页",
          textColor: "blue"
        },
        {
          pathName: "Category",
          itemIcon: require("assets/img/tabbar/category.png"),
          itemIconACtive: require("assets/img/tabbar/category_active.png"),
          itemText: "分类"
        },
        {
          pathName: "Live",
          itemIcon: require("assets/img/tabbar/live.png"),
          itemIconACtive: require("assets/img/tabbar/live_active.png"),
          itemText: "直播"
        },
        {
          pathName: "Profile",
          itemIcon: require("@/assets/img/tabbar/profile.png"),
          itemIconACtive: require("@/assets/img/tabbar/profile_active.png"),
          itemText: "我的"
        }
      ]
    };
  }
};
</script>

<style>
</style>