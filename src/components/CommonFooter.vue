<template>
  <div class="tab">
    <cube-tab-bar
      v-model="selectedLabelSlots"
      show-slider
      inline
      @click="changHandler"
    >
      <cube-tab
        v-for="item in tabs"
        :label="item.label"
        :icon="item.icon"
        :key="item.path"
        :value="item.path"
      >
      </cube-tab>
    </cube-tab-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedLabelSlots: "/",
      tabs: [
        {
          label: "首页",
          icon: "cubeic-home",
          path: "/",
        },
        {
          label: "我的订单",
          icon: "cubeic-mall",
          path: "/order",
        },
        {
          label: "个人中心",
          icon: "cubeic-person",
          path: "/personal",
        },
      ],
    };
  },
  methods: {
    changHandler(path) {
      if (path !== this.$route.path) {
        this.$router.push(path);
      }
    },
  },
  
  //vue实例生命周期 created：在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图
  //vue实例生命周期 mounted：在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行额外的操作    
  created() {
    //刷新页面，重新进入到当前的页面
    this.selectedLabelSlots = this.$route.path;
  },
};
</script>


<!--SCSS是⼀一种CSS预处理理语言, scoped 是指这个scss样式 只作用于当前组件--> 
<style lang="scss" scoped>
.tab {
  position: fixed;
  bottom: 0;
  z-index: 999;
  background-color: #fff;
  width: 100%;
  border-top: 1px solid rgba($color: #000000, $alpha: 0.1);
}
.cube-tab_active {
  color: #3bb149;
}
</style>