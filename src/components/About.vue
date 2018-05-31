<template>
  <div class="cxq-index-page">
    <h1>{{ msg }}</h1>
    <h2 class="cxq-app-name">前端开发标题</h2>
    <span class="cxq-app-des">我是描述文字啊</span>
    <span class="cxq-app-des">我是描述文字啊</span>
    <p class="cxq-app-des">我是描述文字啊</p>
  </div>
</template>

<script>
/* eslint-disable */
	export default {
		name: 'HelloWorld',
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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  a {
    color: #42b983;
  }

  a, span, p {
    font-family: 'Microsoft YaHei', '微软雅黑';
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

  .cxq-u-circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    text-align: center;
    line-height: 80px;
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

  .cxq-top-nav {
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
</style>
