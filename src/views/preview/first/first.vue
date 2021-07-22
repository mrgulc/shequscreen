<template>
  <c-layout class="pre-first">
    <video class="bg" src="/科技分类板块模板.mp4" autoplay loop></video>
    <c-header>header</c-header>
    <c-aside-l class="left">
      <Left></Left>
    </c-aside-l>
    <c-aside-r class="right">
      <Right></Right>
    </c-aside-r>
    <c-main>main</c-main>
    <c-footer>footer</c-footer>
  </c-layout>
</template>

<script>
import Left from './left.vue'
import Right from './right.vue'

export default {
  components: {
    Left,
    Right
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@include b(pre-first) {
}

@include b(bg) {
  object-fit: cover;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

@include b(left) {
  top: 150px;
  left: 30px;
  width: 375px;
}

@include b(right) {
  top: 150px;
  right: 30px;
  width: 375px;
}
</style>
