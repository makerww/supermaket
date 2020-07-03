<template>
  <div class="home">
    <nav-bar>
      <template v-slot:center>
        <input type="text" />
      </template>
      <template v-slot:right>
        <button>登录</button>
      </template>
    </nav-bar>

    <scroll
      class="centent"
      ref="scroll"
      :probe-type="3"
      @scroll="emitScroll"
      :pullUpLoad="true"
      @loadMore="loadMore"
      @reLoad="reLoad"
    >
      <!-- 轮播图 -->
      <swiper
        :imgWidth="710"
        :swiperH="200"
        :imgList="banners"
        :initIndex="0"
        :loop="true"
        :auto="true"
        :autoTime="5000"
      ></swiper>

      <!-- 商品列表 -->
      <goods-list :data="goodsList" />
    </scroll>

    <back-top @click.native="backTop" v-show="backTopShow" />
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";

import Scroll from "components/common/scroll/Scroll";
import Swiper from "components/common/swiper/Swiper";

import BackTop from "components/content/backtop/BackTop";
import GoodsList from "components/content/goodsList/GoodsList";

import { getHomeMutidata } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      banners: [
        {
          img:
            "https://img1.360buyimg.com/pop/s710x206_jfs/t1/87110/18/17889/81619/5e8ef7afe5ec1dc32/425bc22ea109d9b5.jpg!cc_710x206!q70.dpg.webp"
        },
        {
          img:
            "https://img1.360buyimg.com/pop/s710x206_jfs/t1/87110/18/17889/81619/5e8ef7afe5ec1dc32/425bc22ea109d9b5.jpg!cc_710x206!q70.dpg.webp"
        }
      ],
      backTopShow: false,
      goodsIndex: 1,
      goodsList: []
    };
  },
  components: {
    NavBar,
    Scroll,
    BackTop,
    Swiper,
    GoodsList
  },
  created() {
    let resu = {};
    getHomeMutidata().then(res => {
      resu = res;
      console.log(resu.data);
      //this.banners = resu.banner.list;
    });
  },
  mounted() {
    // 开启下拉刷新 和上拉加载更多
    this.$refs.scroll.openPullDown({
      threshold: 50
    });
    this.$refs.scroll.openPullUp();
    this.goods();
  },
  methods: {
    goods() {
      for (
        let index = (this.goodsIndex - 1) * 10;
        index < this.goodsIndex * 10;
        index++
      ) {
        this.goodsList.push("商品:" + index);
      }
      this.goodsIndex += 1;
      this.$refs.scroll.finishPullUp();
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 50, 600);
      this.backTopShow = false;
    },
    emitScroll(position) {
      if (-position.y > 100) {
        this.backTopShow = true;
      } else {
        this.backTopShow = false;
      }
    },
    loadMore() {
      console.log("加载更多");
      this.goods();
    },
    reLoad() {
      console.log("刷新");
      this.$refs.scroll.finishPullDown();
    }
  }
};
</script>


<style scoped>
.home {
  height: 100vh;
  width: calc(100% - 0px);
  position: absolute;
}
.centent {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
}
</style>