<template>
    <div id="app">
        <my-header></my-header>
        <router-view></router-view>
        <my-footer></my-footer>
    </div>
</template>

<script>
import MyHeader from './components/Header.vue'
import MyFooter from './components/Footer.vue'

export default {
  components: {
    MyHeader,
    MyFooter
  }
}

</script>

<style>
    #app {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }

    main {
        flex: 1 0 auto;
    }
</style>
