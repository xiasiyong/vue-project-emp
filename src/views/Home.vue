<template>
  <div class="home">
    <div>21</div>
    <img alt="Vue logo" src="../assets/logo.png">
    <Content />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import Content from '@emp/vue2Project/components/Content.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    // Content
  }
}
</script>
