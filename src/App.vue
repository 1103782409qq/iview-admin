<!--<template>-->
  <!--<div id="app">-->
    <!--<router-view/>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
  <!--name: 'App'-->
<!--}-->
<!--</script>-->

<!--<style lang="less">-->
<!--.size{-->
  <!--width: 100%;-->
  <!--height: 100%;-->
<!--}-->
<!--html,body{-->
  <!--.size;-->
  <!--overflow: hidden;-->
  <!--margin: 0;-->
  <!--padding: 0;-->
<!--}-->
<!--#app {-->
  <!--.size;-->
<!--}-->
<!--</style>-->
<template>
  <div>
    <router-view></router-view>

  </div>
</template>

<script>
    export default {
        components:{
        },
    }
</script>

<style >
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
</style>