<template>
  <div class="cxq-search-page">
     <div class="cxq-u-top-nav cxq-search-nav">
       <input type="text" class="search-input" placeholder="请在此输入要查询的单词">
       <img src="../assets/images/close-btn.png" alt="" class="cxq-close-icon">
     </div>
    <div class="result-wrap">
      <div class="have-try">
        <img src="../assets/images/chemistry-regular.png" alt="" class="cxq-menu-icon">
        <p>试一试又不会</p>
      </div>
    </div>
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
  html,body{

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
</style>
