<template>
  <div class="main">
    <cube-form :model="model" @submit="submitHandler">
      <cube-form-group>
        <!--名称-->
        <cube-form-item :field="fields[0]"></cube-form-item>
        <!--手机号-->
        <cube-form-item :field="fields[1]"></cube-form-item>
        <!--密码-->
        <cube-form-item :field="fields[2]"></cube-form-item>
      </cube-form-group>

      <cube-form-group>
        <cube-button type="submit">注册</cube-button>
      </cube-form-group>
    </cube-form>

    <router-link to="/login" class="reg">登录</router-link>

  </div>
</template>

<script>
import { registerApi } from "@/api/getData.js";

export default {
  name: "HxyBlogvRegister",
  components: {},
  directives: {},
  data() {
    return {
      model: {
        phoneValue: "",
        pwdValue: "",
        nameValue: "",
      },
      fields: [
        {
          type: "input",
          modelKey: "nameValue",
          label: "名称",
          props: {
            placeholder: "请输入名称",
          },
          rules: {
            required: true,
          },
          messages: {
            required: "名称不能为空",
          },
        },
        {
          type: "input",
          modelKey: "phoneValue",
          label: "手机号",
          props: {
            placeholder: "请输入手机号",
          },
          rules: {
            required: true,
          },
          messages: {
            required: "手机号不能为空",
          },
        },
        {
          type: "input",
          modelKey: "pwdValue",
          label: "密码",
          props: {
            placeholder: "请输入密码",
            type: "password",
            eye: {
              open: false,
            },
          },
          rules: {
            required: true,
          },
          messages: {
            required: "密码不能为空",
          },
        },
      ],
    };
  },
  mounted() {},
  methods: {
    submitHandler(e, model) {
      e.preventDefault();
      registerApi(model.nameValue, model.phoneValue, model.pwdValue).then(
          (res) => {
            if (res.data.code === 0) {
              const toast = this.$createToast({
                txt: "注册成功",
                type: "correct",
                time: 1000,
              });
              toast.show();
              this.$router.push('/login')
            }else{
            const toast = this.$createToast({
                txt: "注册失败",
                type: "error",
                time: 1500,
              });
              toast.show();
            }
          }
      );
    },
  },
  
};
</script>

<style lang="scss" scoped>
.main {
  padding: 50px 5% 0;
  text-align: center;
}
//注册
.cube-btn {
  margin-top: 20px;
}
// 登录
.reg {
  display: inline-block;
  margin-top: 30px;
  font-size: 18px;
}
</style>