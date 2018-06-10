<template>
  <div class="cxq-index-page">
    <p @click="show">我是查询后的单词</p>
    <p>{{$route.params}}</p>
     <router-link to="/">返回首页</router-link>
  </div>
</template>

<script>
/* eslint-disable */
	export default {
		name: 'Word',
    methods:{
			show() {
          console.log(`--`,this.$route.params);
			}
    }
	}
</script>

<style scoped lang="scss">
  @import "../assets/css/base";
  .special{
    /*align-self: flex-start;*/
  }
  .cxq-index-page {
    position: relative;
    overflow: hidden;
  }
  .cxq-author-wrap{

    background-color: #42b983;
    width: 80%;
    margin: 20% auto ;
    padding: 4px;
    display: flex;
    flex-direction: column;
    /*align-items: flex-start;*/
    /*justify-content: flex-start;*/
    box-shadow: 0px 1px 2px #eee;
    background: #eee; /* Fallback */
    background: linear-gradient(to left bottom, transparent 50%, rgba(0, 0, 0, 0.4) 0) no-repeat 100% 0 / 2em 2em,
    linear-gradient(-135deg, transparent 1.5em, #1296db 0);
    p,h2{
      color: #fff;
      align-self: flex-start;
    }
    p{
      font-size: 20px;
      margin: 10px auto;
    }

  }

</style>
