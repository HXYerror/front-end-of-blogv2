<template>
  <div>
    <img :src="baseURL + articleInfo.article_summary"  class="summary"/>
  </div>
</template>

<script>
import { baseURL } from "@/request.js";

export default {
  name: "HxyBlogvSummary",
  components: {},
  directives: {},
  props: {
    articleInfo: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      baseURL,
      tab:"wodetian",
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.summary {
  width: 100%;
  padding-bottom: 50px;
  margin: 15px 0;
}
</style>