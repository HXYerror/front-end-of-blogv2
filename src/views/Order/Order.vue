<template>
  <div class="main">
    <div class="list" v-if="orderList.length > 0">
      <div class="box" v-for="(item, index) of orderList" :key="index">
        <router-link
          :to="{
            path: '/coursedetail',
            query: { article_id: item.article_id },
          }"
        >
          <div class="smallbox">
            <div class="imgdiv">
              <img :src="baseURL + item.article_img" alt="文章" />
            </div>

            <div class="textdiv">
              <p class="title">{{ item.article_title }}</p>
              <p class="price">
                价格: {{ item.article_order_total_fee / 100 }}
              </p>
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <div class="no_order" v-else>
      <p>暂未购买课程</p>
    </div>

    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonFooter from "@/components/CommonFooter";
import { getOrderList } from "@/api/getData.js";
import { baseURL } from "@/request.js";

export default {
  name: "HxyBlogvOrder",
  components: {
    CommonFooter,
  },
  directives: {},
  data() {
    return {
      orderList: [],
      baseURL,
    };
  },
  mounted() {
    this.getOrderList();
  },
  methods: {
    async getOrderList() {
      try {
        const result = await getOrderList(this.$store.state.token);
        if (result.data.code == 0) {
          this.orderList = result.data.data || [];
          console.log(this.orderList);
        } 
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  padding: 0 20px;
}

// 视频个体
.box {
  padding: 20px 0;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  // 标题
  .title {
    font-size: 14px;
    margin-bottom: 15px;
  }
  .price {
    text-align: right;
    font-size: 15px;
    margin-bottom: 15px;
  }
  // 订单详情
  .smallbox {
    //flex左右排列，两端对齐
    display: flex;
    justify-content: space-between;
    .imgdiv {
      width: 90px;
      height: 60px;
      flex-shrink: 0;
      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
    .textdiv p {
      margin-top: 10px;
      padding-left: 10px;
    }
  }
}

.no_order {
  margin-top: 50px;
  text-align: center;
}
</style>