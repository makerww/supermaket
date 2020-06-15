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
    首页
    <div style="height:300px;width:30px;background:red;">宽30</div>
    <!-- <swiper
      :imgWidth="598"
      :imgList="banners"
      :initIndex="0"
      :loop="true"
      :auto="true"
      :autoTime="2000"
    ></swiper>-->
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";

// import Swiper from "components/common/swiper/Swiper";

import { getHomeMutidata } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      banners: [
        {
          img:
            "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1591926765&di=32ad3f1ad808420d79da29910850295e&src=http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg"
        },
        {
          img:
            "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1591926765&di=32ad3f1ad808420d79da29910850295e&src=http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg"
        },
        {
          img:
            "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1591926765&di=32ad3f1ad808420d79da29910850295e&src=http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg"
        }
      ]
    };
  },
  components: {
    NavBar
    // Swiper
  },
  created() {
    let resu = {};
    getHomeMutidata().then(res => {
      resu = res;
      console.log(resu.data);
      //this.banners = resu.banner.list;
    });

    // this.banners = resu.banner.list;
  }
};
</script>
