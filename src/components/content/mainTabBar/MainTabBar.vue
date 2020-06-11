<template>
  <div>
    <tab-bar>
      <tab-bar-item path="Home" color="blue">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/home.png" alt />
        </template>
        <template v-slot:item-icon-active>
          <img src="@/assets/img/tabbar/home_active.png" alt />
        </template>
        <template v-slot:item-text>首页</template>
      </tab-bar-item>
      <tab-bar-item path="Category">
        <template v-slot:item-icon>
          <img src="@/assets/img/tabbar/category.png" alt />
        </template>
        <template v-slot:item-icon-active>
          <img src="@/assets/img/tabbar/category_active.png" alt />
        </template>
        <template v-slot:item-text>分类</template>
      </tab-bar-item>
      <tab-bar-item path="Live">
        <template v-slot:item-icon>
          <img src="@/assets/img/tabbar/live.png" alt />
        </template>
        <template v-slot:item-icon-active>
          <img src="@/assets/img/tabbar/live_active.png" alt />
        </template>
        <template v-slot:item-text>直播</template>
      </tab-bar-item>
      <tab-bar-item path="Profile">
        <template v-slot:item-icon>
          <img src="@/assets/img/tabbar/profile.png" alt />
        </template>
        <template v-slot:item-icon-active>
          <img src="@/assets/img/tabbar/profile_active.png" alt />
        </template>
        <template v-slot:item-text>我的</template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBar_Item";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style>
</style>