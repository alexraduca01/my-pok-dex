<template>
    <div class="bg-dark-red d-flex justify-content-between align-items-center px-3" style="height: 60px;">
        <router-link :to="'/'">
            <img src="/img/logo.png" style="height: 50px; filter: drop-shadow(5px 5px 2px rgba(0, 0, 0, 0.5));">
        </router-link>
        
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