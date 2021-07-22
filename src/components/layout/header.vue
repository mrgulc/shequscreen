<template>
  <div class="c-header">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CHeader'
}
</script>

<style lang="scss" scoped>
@include b(c-header) {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
