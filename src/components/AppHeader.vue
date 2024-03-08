<template>
    <div class="bg-dark-red d-flex justify-content-between align-items-center px-3" style="height: 60px;">
        <img src="/img/logo.png" style="height: 80%;">
        <h1 v-if="store.regionName != ''" class="text-white m-0">{{ store.regionName }}</h1>
    </div>
</template>

<script>
import { store } from '../store';
    export default {
        name: 'AppHeader',
        data(){
            return {
                store
            }
        }
    }
    
</script>

<style lang="scss" scoped>

</style>