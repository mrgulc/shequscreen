<template>
  <div class="c-aside-l">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CAsideL'
}
</script>

<style lang="scss" scoped>
@include b(c-aside-l) {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
}
</style>
