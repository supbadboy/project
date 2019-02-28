<template>
  <div class="wrapper">
    <image :src="logo" class="logo" />
  </div>
</template>

<script>
  import weexUtil from '@/weex/util/util';

export default {
  name: 'App',
  data () {
    return {
      logo: weexUtil.imageUrl+"welcome.jpg"
    }
  }
}
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 750px;
    height: 1200px;
  }

</style>
