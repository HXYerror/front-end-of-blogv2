<template>
    <div>
        <detail-header :articleInfo="articleInfo"> </detail-header>

        <detail-course :articleInfo="articleInfo"> </detail-course>

        <detail-tab :articleInfo="articleInfo" :chapterList="chapterList"> </detail-tab>

        <footer>
            <router-link :to ="{path:'/pay',query:{article_id:this.$route.query.article_id}}" class="user_buy">
                <button>
                    立刻购买
                </button>
            </router-link>
        </footer>
    </div>
</template>

<script>
import  DetailHeader  from "./Components/Header";
import  DetailCourse from "./Components/Course";
import  DetailTab  from "./Components/Tab";

import { getArticleDetail } from '../../api/getData';

export default {
    name: 'HxyBlogvCoursedetail',
    components: { 
        DetailHeader,
        DetailCourse,
        DetailTab
     },

    data() {
        return {
            articleInfo:{},
            chapterList:[]
        };
    },

    mounted() {
        this.getDetail(this.$route.query.article_id);
        console.log(this.$route.query.article_id);
    },

    methods: {
        async getDetail(article_id){
            try {
                const result = await getArticleDetail(article_id)
                if(result.data.code == 0){
                    this.articleInfo = result.data.data;
                    this.chapterList = result.data.data.chapter_list;
                }
            } catch (error) {
                console.log(error)
            }
        }    
    },
};
</script>

<style lang="scss" scoped>
//底部
footer {
  // fixed固定在底部
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 8px 0;
  background-color: #fff;
  z-index: 999;
  box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.05);
}
//设置购买按钮样式
button {
  display: block;
  color: #fff;
  margin: 0 auto;
  background-color: #d93f30;
  height: 34px;
  line-height: 34px;
  border-radius: 17px;
  width: 80%;
  border: none;
  font-size: 15px;
  text-align: center;
}
</style>