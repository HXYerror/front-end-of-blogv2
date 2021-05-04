<template>
    <div>
        <cube-tab-bar v-model="selectedLabel" show-slider>
            <cube-tab v-for="item in tabs" :label="item.label" :key="item.label">

            </cube-tab>
        </cube-tab-bar>

        <component :articleInfo="articleInfo" :chapterList="chapterList" :is='selectedLabel==="简介" ? "Summary" : "Catalog"'>
        </component>
        
    </div>
</template>

<script>
import Summary  from "./Summary";
import Catalog from './Catalog';


export default {
    name: 'HxyBlogvTab',
    components: { 
        Summary,
        Catalog
     },
     props:{
         articleInfo:{
             type:Object,
             require:true
         },
         chapterList:{
             type:Array,
             require:true
         }
     },

    data() {
        return {
            selectedLabel:"简介",
            tabs:[
                {
                    label:"简介"
                },{
                    label:"目录"
                }
            ]
        };
    },
    mounted() {
        
    },
    methods: {
        
    },
};
</script>

<style scoped>

</style>