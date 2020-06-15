<template>
  <div class="category">
    <nav-bar>
      <template v-slot:center>
        <input type="text" />
      </template>
      <template v-slot:right>
        <button>登录</button>
      </template>
    </nav-bar>

    分类界面
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
export default {
  name: "Category",
  components: {
    NavBar
  }
};
</script>
