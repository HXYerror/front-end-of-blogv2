<template>
<div>
    <div class="info">
       <p class="info_title">商品信息</p>
       <div class="box">
           <div class="imgdiv"> 
            <img alt="课程照片" :src="baseURL +  articleInfo.article_cover_img">
           </div>
           <div class="textdiv">
               <p class="c_title">{{articleInfo.article_title}}</p>
               <p class="price">
                    ￥:&nbsp;&nbsp;{{articleInfo.article_price / 100}}
               </p>
           </div>
       </div>
    </div>

    <div class="footer">
        <p class="money">
            实付:&nbsp;&nbsp;{{articleInfo.article_price / 100}}
        </p>
        <p class="submit" @click="pay">
            立刻支付
        </p>
    </div>
</div>

</template>

<script>
import { getArticleDetail,saveOrder } from "@/api/getData.js";
import { baseURL } from '../../request';


export default {
    name: 'HxyBlogvPay',
    components: {  },
    directives: {  },
    data() {
        return {
            articleInfo:{},
            baseURL
        };
    },
    mounted() {
        this.getDetail(this.$route.query.article_id)
    },
    methods: {
        async getDetail(article_id){
            try {
                const result = await getArticleDetail(article_id)
                if(result.data.code == 0){
                    this.articleInfo = result.data.data;
                }
            } catch (error) {
                console.log(error)
            }
        },   
        
        async pay(){
            try{
                const result = await saveOrder(this.$store.state.token,this.$route.query.article_id);

                if(result.data.code == 0){
                    const toast = this.$createToast({
                        txt: "下单成功",
                        type: "correct",
                        time: 500,
                        onTimeout:()=>{
                            this.$router.push('/order')
                        }
                    });
                    toast.show();
                }else{
                        const toast = this.$createToast({
                        txt: "下单失败",
                        type: "error",
                        time: 1000,
                    });
                    toast.show();
                }


            }catch(error){
                console.log(error)
            }
        }
    },
};
</script>

<style lang="scss" scoped>
// 视频标题
.info_title {
  padding: 10px 20px;
  background-color: #fff;
  border-bottom: 1px solid #d9dde1;
}

.box {
  background-color: #fff;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  margin-bottom: 15px;
  .imgdiv {
    width: 105px;
    height: 59px;
    flex-shrink: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .textdiv {
    margin-left: 20px;
    height: 59px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .price {
      flex-shrink: 0;
    }
  }
}
//底部
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.1);
  font-size: 16px;
  .money {
    height: 50px;
    line-height: 50px;
    flex: 2;
    text-align: center;
    background-color: #fff;
  }
  .submit {
    height: 50px;
    line-height: 50px;
    flex: 1;
    text-align: center;
    background-color: #ff2d50;
    color: #fff;
  }
}
</style>