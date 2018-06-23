<template>
  <div class="cxq-u-dialog">
    <div class="cxq-dialog-mask" v-if="isShow" @click="closeMask"></div>
    <div class="cxq-u-dialog-container" v-if="isShow">
      <div class="cxq-u-dialog-header" @click="closeMask">
        <slot name="header">感谢您的反馈，我会继续改进的！</slot>
      </div>
      <div class="cxq-u-dialog-center">
        <slot name="center">弹框内容</slot>
      </div>
    </div>
    <p>反馈页面</p>
  </div>
</template>

<script>
/* eslint-disable */
  export default {
    name: 'mdialog',
    props: {
      isShow: {
        type: Boolean,
        default: true,
        required: true,
        validate (value){
          return typeof value === 'boolean'
        }
      },
    },
    methods: {
      closeMask: function () {
        this.$emit ('on-close')
      }
    }
  }
</script>

<style scoped lang="scss">
  .cxq-u-dialog {
    position: relative;
    font-size: 14px;
  }

  .cxq-dialog-mask {
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 100;
  }

  .cxq-u-dialog-container {
    position: relative;
    top: 30%;
    left: 50%;
    transform: translate(-50%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    z-index: 200;
    width: 200px;
    height: 200px;
    border-radius: 2px;
    box-shadow: 1px 1px 2px #eee;
  }

</style>
