<template>
  <div class="cxq-check-page">
    <h1>{{ msg }}</h1>
    <div class="cxq-u-word-show-list"
    @touchstart.stop.capture.prevent="touchstart"
    @touchend.stop.capture.prevent="touchend"
    @touchmove.stop.capture.prevent="touchmove"
    >

    </div>
    <!--<div class="cxq-u-circle cxq-btn-check-right"><span>+</span></div>-->
    <!--<div class="cxq-u-circle cxq-btn-check-left"><span>√</span></div>-->
  </div>
</template>

<script>
/* eslint-disable */
	export default {
		name: 'Home',
		data() {
			return {
				menuActive:true,
				msg: 'feword',
				slideData:{
					start:{x:null,y:null},
					end:{x:null,y:null},
        }
			}
		},
		created() {
			// console.log('加载了');
		},
    methods:{
			changeMenu:function(){
				this.$data.menuActive=!this.$data.menuActive
			},
			touchstart(e){
				this.slideData.start.x=e.targetTouches[0].clientX;
				this.slideData.start.y=e.targetTouches[0].clientY;
      },
			touchend(e){
				console.log(`touchend`,e);
				this.slideData.end.x=e.changedTouches[0].clientX;
				this.slideData.end.y=e.changedTouches[0].clientY;
				console.log(`touchend`,e.changedTouches[0].clientX-this.slideData.start.x,e.changedTouches[0].clientY-this.slideData.start.y,);
			},
			touchmove(e){
				var isMove=Math.abs(Math.sqrt(Math.pow(e.changedTouches[0].clientX-this.slideData.start.x,2)-Math.pow(e.changedTouches[0].clientY-this.slideData.start.y,2))).toFixed(0)
				console.log(`touchmove`,isMove,isMove>60);
      }
    }
	}
</script>


<style scoped lang="scss">
 @import '../assets/css/base';
  .cxq-check-page {
    position: relative;
    overflow: hidden;
  }
.cxq-u-word-show-list{
  width: 60%;
  margin: 0 auto;
  height: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: darkcyan;
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
