<template>
  <c-single-center type="col" h-full>
    <BContainer1>
      <template v-slot:title>
        <span>社区场所</span>
      </template>
        <template v-for="item in 20">
          <div :key="item" inline-block ph5 w-50 mb10>
            <BTab1 :key="item">
              <template v-slot:icon>
                <iconpark-icon name="djfw"></iconpark-icon>
              </template>
              <template v-slot:text>
                <span>智慧书屋</span>
              </template>
              <span>1</span>
            </BTab1>
          </div>
        </template>
    </BContainer1>

    <BContainer1 style="flex:1">
      <template v-slot:title>
        <span>社区场所</span>
      </template>
      <span>3</span>
    </BContainer1>
  </c-single-center>

</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

