<template>
  <div class="cxq-index-page">
    <h1>{{ msg }}</h1>
  <p>反馈页面</p>
  </div>
</template>

<script>
/* eslint-disable */
	export default {
		name: 'About',
		data() {
			return {
				menuActive:true,
				msg: 'feword'
			}
		},
    created(){
		  console.log(`-`,this.$route);
    },
    methods:{
			changeMenu:function(){
				this.$data.menuActive=!this.$data.menuActive
			}
    }
	}
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  a {
    color: #42b983;
  }

</style>
