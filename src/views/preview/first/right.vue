<template>
  <BContainer2 :tabs="tabs"></BContainer2>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        {
          name: '场景一',
          isEnable: true
        },
        {
          name: '场景二',
          isEnable: true
        },
        {
          name: '场景三',
          isEnable: true
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
