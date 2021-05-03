<template>
  <div>
    <cube-slide  :data="banners">
      <cube-slide-item
        v-for="(item, index) in banners"
        :key="index"
      >

        <a :href="item.banner_url">
          <img :src="item.banner_img" style="width:100%" />
        </a>

      </cube-slide-item>
    </cube-slide>
  </div>
</template>

<script>
export default {
  name: "HxyBlogvBanner",
  props:{
      banners:{
          type:Array,
          require:true
      }
  },
  data() {
    return {
        
    };
  },
};
</script>

<style lang="scss" scoped>
</style>