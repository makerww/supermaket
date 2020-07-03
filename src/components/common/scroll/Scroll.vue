<template>
  <div class="wrapper" ref="wrapper">
    <div class="centent">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 3
    },
    pullDownRefresh: {
      //下拉刷新
      type: Boolean,
      default: true
    },
    pullUpLoad: {
      //上拉加载更多
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  components: {},
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click:true,
      probeType: this.probeType
    });
    // 监听滚动
    this.scroll.on("scroll", position => {
      this.$emit("scroll", position);
    });

    // 加载更多
    this.scroll.on("pullingUp", () => {
      this.$emit("loadMore");
    });
    // 加载更多
    this.scroll.on("pullingDown", () => {
      this.$emit("reLoad");
    });
  
  },
  methods: {
    scrollTo(x, y, time = 1000) {
      this.scroll.scrollTo(x, y, time);
    },
    openPullUp(config) {
      this.scroll.openPullUp(config);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    openPullDown(config) {
      this.scroll.openPullDown(config);
    },
    finishPullDown() {
      this.scroll.finishPullDown();
    }
  }
};
</script>

<style>
.wrapper{
width: 100%;

}
</style>