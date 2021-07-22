<template>
  <div class="c-layout">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CLayout'
}
</script>

<style lang="scss" scoped>
@include b(c-layout) {
  position: relative;
  height: 100vh;
  width: 100vw;
}
</style>
