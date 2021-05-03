<template>
  <div>
    <home-banner :banners="banners"></home-banner>

    <article-list :articleList="atricleList"></article-list> 

    <common-footer></common-footer>
  </div>
</template>



<script>
import HomeBanner from "./Component/Banner";
import ArticleList from "./Component/ArticleList";
import CommonFooter from "@/components/CommonFooter";
import { getBanner, getArticleList } from "@/api/getData.js";

export default {
  name: "HxyBlogvHome",
  components: {
    HomeBanner,
    ArticleList,
    CommonFooter,
  },

  data() {
    return {
      banners: [],
      atricleList: [],
    };
  },

  methods: {
    async getBannerData() {
      try {
        const result = await getBanner();
        console.log(result);
        if ((result.data.code == 0)) {
          this.banners = result.data.data;
        }
      } catch (error) {
        console.log(error);
      }
    },

    async getArticleListData() {
      try {
        const result = await getArticleList();
        console.log(result);
        if ((result.data.code == 0)) {
          this.atricleList = result.data.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },

  mounted() {
    this.getBannerData();
    this.getArticleListData();
  },
};
</script>

<style lang="scss" scoped>
</style>

