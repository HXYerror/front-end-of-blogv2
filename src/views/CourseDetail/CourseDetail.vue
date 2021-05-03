<template>
    <div>
        <detail-header :articleInfo="articleInfo"> </detail-header>

        <detail-course :articleInfo="articleInfo"> </detail-course>

        <detail-tab> </detail-tab>

        <footer> </footer>
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

</style>