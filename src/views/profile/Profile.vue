<template>
  <div class="profile">
   <nav-bar back-color="var(--color-high-text)">
      <template v-slot:center>
      我的
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
export default {
  name: 'Profile',
  components: {
  NavBar
  }
}
</script>
