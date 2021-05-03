<template>
  <div class="list-contnet">
    <div class="list">
      <router-link
        v-for="item in articleList"
        :key="item.article_id"
        :to="{ path: '/coursedetail', query: { article_id:item.article_id }}"
        class="course"
      >
        <div class="item_img">
          <img :src="baseURL + item.article_cover_img" />
        </div>

        <div>
          <div class="c_title">
            {{ item.article_title }}
          </div>

          <div class="price">￥{{ item.article_price / 100 }}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { baseURL } from "@/request.js";

export default {
  name: "HxyBlogvArticlelist",
  components: {},
  props: {
    articleList: {
      type: Array,
      require: true,
    },
  },

  data() {
    return {
        baseURL
    };
  },
  mounted() {},
  methods: {},
};
</script>


<style lang="scss" scoped>
//列表包裹层边距
.list-content {
  margin-top: 20px;
  padding: 0 13px;
}
//视频包括层
.list {
  display: flex; //设置flex布局
  flex-wrap: wrap; //换行排列
  justify-content: space-between; //两端对齐
  padding-bottom: 55px;
}
//视频个体层
.course {
  width: 48%;
  margin-bottom: 17px;
}
//视频图片
.item_img {
  font-size: 0; //消除图片元素产生的间隙
  box-shadow: 0 4px 11px 0 rgba(43, 51, 59, 0.6); //设置图片阴影，rgba前三个参数是颜色编码，最后一个是透明度
  border-radius: 8px; //设置图片圆角
  img {
    width: 100%;
    border-radius: 8px;
  }
}
.c_title {
  //设置超过两行隐藏 start
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: break-all;
  //设置超过两行隐藏 end
  font-size: 15px;
  height: 25px;
  line-height: 23px;
  margin-top: 10px;
  color: #2b333b;
}
//价格
.price {
  margin-top: 8px;
  font-size: 12px;
  color: #d93f30;
}
</style>
