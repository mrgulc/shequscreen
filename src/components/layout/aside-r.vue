<template>
  <div class="c-aside-r">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CAsideR'
}
</script>

<style lang="scss" scoped>
@include b(c-aside-r) {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
}
</style>
