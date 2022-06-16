<template>
    <div class="container">
        HomePage
    </div>
</template>
<script>
export default {
  name: 'HomePage'
}
</script>
<style scoped lang="less">
// @import '../../assets/styles/mixins.less';
// @import '../../assets/styles/variables.less';

.container{
    background: @xtxColor;
    .hoverShadow();
}
</style>
