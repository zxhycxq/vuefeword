<template>
  <div class="cxq-index-page">
    <div class="cxq-left-menu"  v-bind:class="['cxqLeftMenu',menuActive?'cxqMenuActive':' ']">
      <div class="cxq-user-info">
        <img src="../assets/logo.png" class="cxq-menu-icon">
        <p>我的名字是</p>
      </div>
      <ul class="cxq-left-nav">
        <li>
          <img src="../assets/images/wallet.png"  class="cxq-menu-icon"  alt="个人中心" title="个人中心">
          <span>个人中心</span>
        </li>
        <li>
          <img src="../assets/images/info.png"  class="cxq-menu-icon"  alt="关于作者" title="关于作者">
          <span>关于作者</span>
        </li>
        <li>
          <img src="../assets/images/check-box-outline.png"  class="cxq-menu-icon"  alt="关于软件" title="关于软件">
          <span>关于软件</span>
        </li>
      </ul>
    </div>
    <div class="cxq-u-top-nav">
      <div class="cxq-top-nav-left" @click="changeMenu()">
        <img src="../assets/images/menu.png" class="cxq-menu-icon"  alt="菜单" title="菜单">
        <span>菜单</span>
      </div>
      <router-link to="/Search">
        <img src="../assets/images/search.png" class="cxq-menu-icon"   alt="搜索" title="搜索">
      </router-link>
    </div>
    <h1>{{ msg }}</h1>
    <img src="../assets/images/feword.png" class="cxq-u-logo-icon cxq-index-logo" alt="前端单词" title="前端单词" >
    <h2 class="cxq-app-name">前端开发标题</h2>
    <span class="cxq-app-des">我是描述文字啊</span>
    <span class="cxq-app-des">我是描述文字啊</span>
    <p class="cxq-app-des">我是描述文字啊</p>
    <br>
    <mycomponent></mycomponent>
    <br>
    <router-link to="/About">关于页面</router-link>
    <router-link to="/Author">Author页面</router-link>
    <router-link to="/Check">Check页面</router-link>
    <div class="cxq-u-circle cxq-btn-circle"><span>+</span></div>
  </div>
</template>

<script>
/* eslint-disable */
import Vue from 'vue'
	export default {
		name: 'Home',
		props: ['myMessage'],
		data() {
			return {
				menuActive:true,
				msg: 'feword'
			}
		},
    methods:{
			changeMenu:function(){
				this.$data.menuActive=!this.$data.menuActive
			}
    }
	}
Vue.component('mycomponent',{
	template: `<div>这是一个自定义组件</div>`,
	data () {
		return {
			message: 'hello world'
		}
	}
})
</script>


<style scoped  lang="scss">
  @import "../assets/css/base";
  h1, h2 {
    font-weight: normal;
  }

  a {
    color: #42b983;
    text-decoration: none;
  }


  .cxq-index-page {
    position: relative;
    overflow: hidden;
  }

  .cxq-app-name {
    font-weight: bold;
    padding: 10px 0;
  }

  .cxq-app-des {
    font-family: 'Microsoft YaHei', '微软雅黑';
    padding: 1px 0;
    font-size: 20px;
  }



  .cxq-btn-circle {
    position: fixed;
    right: 10px;
    bottom: 10px;
    background-color: orange;
  }

  .cxq-btn-circle span {
    color: #fff;
    font-size: 30px;
    cursor: pointer;
  }

  .cxq-u-top-nav {
    background-color: blueviolet;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 4px 10px;
  }

  .cxq-top-nav-left {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .cxq-top-nav span {
    color: #fff;
    font-size: 30px;

  }

  .cxq-menu-icon {
    width: 40px;
    height: 40px;
    vertical-align: center;
  }

  .cxqLeftMenu {
    position: fixed;
    top: 0;
    left:0;
    width: 25%;
    height: 100%;
    background-color: #eee;
  }
  .cxqMenuActive{
    left: -25%;
  }

  .cxq-user-info {
    background-color: #fff;
    display: flex;
    padding: 2px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .cxq-left-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 0;
    /*background-color: olivedrab;*/
  }

  .cxq-left-nav li {

    background-color: olivedrab;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .cxq-index-logo{
    width: 80%;
    box-shadow: 2px 4px 7px #eee;
  }
</style>
