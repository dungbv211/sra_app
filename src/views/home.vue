<template>
    <div>
        <home-view></home-view>
        <info></info>
    </div>
</template>
  
<script>
  
import homeView from '../components/homeView.vue'
import info from '../components/info.vue'
export default {
    name: 'App',
    components: {
        'home-view': homeView,
        'info': info,
    }
}
</script>
  
<style >
</style>
  