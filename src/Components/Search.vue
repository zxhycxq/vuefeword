<template>
  <div class="cxq-search-page">
     <div class="cxq-u-top-nav cxq-search-nav">
       <input type="text" class="search-input" placeholder="请在此输入要查询的单词" v-on:input="queryWord()" autofocus="autofocus" v-model="message" >
       <img src="../assets/images/close-btn.png" alt="" class="cxq-close-icon" @click="clearInput()">
     </div>
    <div class="searchWord">
      <p  @click="q()">您输入的单词是{{message}}</p>
      <p>{{ $store.state.retData}}</p>
    </div>
    <div class="result-wrap">
      <div class="have-try">
        <img src="../assets/images/chemistry-regular.png" class="cxq-menu-icon"  alt="试一试又不会" title="试一试又不会">
        <p @click="query()">试一试又不会12</p>
        <p>{{message}}</p>
        <div class="demo" @click="consolestate()">123</div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import { Action, mapActions } from 'vuex'
	export default {
		name: 'Search',
  /*  components:{
      Search,
    },*/
		data() {
			return {
				menuActive:true,
				msg: 'feword',
        message:null,
			}
		},
    actions: {
      increment (context) {
       console.log(`%c--12-- `,'color:blue;font-weight:bold', 12);
      }
    },
    methods:{
			q:function(){
			 var msg = this.$data.message;
			  console.log(`%c--message-- `,'color:blue;font-weight:bold', msg,this.$store);
        this.$store.dispatch('queryWord', {word:msg})
			},
      clearInput(){
        this.$data.message=''
			  console.log(`== `,this.$data.message);
      },
      query:function () {
				axios.get('/api/bdc/search/?word='+`${this.$data.message}`)
						 .then(function(response){
						   if(response.data.status_code===0){
						     var resultData=response.data.data;
                 console.log(resultData.definition);
               }
						 })
						 .catch(function(err){
							 console.log(err);
						 });
			},
			queryWord:function (e) {
			},
			consolestate:function (e) {
        console.log(`%c--this.$store-- `,'color:red;font-weight:bold', this.$store.state);
			}
    }
	}
</script>


<style scoped lang="scss">
  @import "../assets/css/base";
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  h1, h2 {
    font-weight: normal;
  }

  a {
    color: #42b983;
  }

  a, span, p {
    font-family: 'Microsoft YaHei', '微软雅黑';
  }
  .cxq-search-page{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    p{
      color:red;
    }
  }
  .cxq-u-top-nav {
    background-color: blueviolet;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 4px 10px;
  }
  .search-input{
    border-color: transparent;
    color: #fff;
    background-color: blueviolet;
  }
  .search-input:focus{
    border-color: blueviolet;
  }
  .result-wrap{
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
  .cxq-close-icon{
    width: 50px;
    height: 50px;
  }
  .have-try{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  /* todo 占位符颜色*/
  /* todo  https://github.com/imochen/hotcss*/
  /* todo  圆形按钮、列表、介绍文字、顶部、查询结果状态等*/
  /* todo  extends组件扩展*/
</style>
