<template>
  <div class="cxq-theme-page">

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
    methods:{
			changeMenu:function(){
				this.$data.menuActive=!this.$data.menuActive
			}
    }
	}
</script>

<style scoped>

</style>
