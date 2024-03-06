<template>
    <div class="w-100 vh-100 overflow-hidden p-3 bg-poke-blue ">
        <h1>Kanto</h1>
        <div class="container">
            <div class="row pb-5">
                <div class="col-9 p-0 bg-white pokemon-details" style="height: 90vh;">
                    <div class="d-flex h-50 justify-content-center align-items-end" :style="`background-color: ${getBadgeColor(pokemons[0]?.types[0].type.name)}`" style="border-top-left-radius: 25px; border-top-right-radius: 25px;">
                        <img :src="pokemons[0]?.sprites.other.showdown.front_default" style="height: 150px;" alt="pokemon image">
                    </div>
                </div>
                <div class="col-3 " style="overflow: auto; height: 90vh;">
                    <div class="pokemon-card px-1 bg-white d-flex justify-content-between align-items-center" v-for="item in pokemons">
                        <img :src="item.sprites.front_default" style="width: 50px;" :alt="item.name">        
                        <p class="fs-6 m-0 pokemon-name">{{ item.name }}</p>
                        <p class="fs-6 m-0 pe-2">Nr. {{ formatDexEntry(item.game_indices[19].game_index) }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
    export default {
        name: 'AppKanto',
        data(){
            return {
                store,
                pokemons: [],
            }
        },
        methods: {
            async getPokemons(){
                try {
                    let requests = [];
                    for(let i = 1; i <= 151; i++){
                        requests.push(axios.get(store.apiUrl + i));
                    }

                    const responses = await Promise.all(requests);

                    responses.forEach(response => {
                        this.pokemons.push(response.data);
                    });
                    console.log(this.pokemons);
                } catch (error) {
                    console.error("Errore durante le richieste API:", error);
                }
            },
            getBadgeColor(type){
                if(type == 'normal'){
                    return '#A8A77A';
                } else if (type == 'fighting'){
                    return '#C22E28';
                } else if (type == 'flying'){
                    return '#A98FF3';
                } else if (type == 'poison'){
                    return '#A33EA1';
                } else if (type == 'ground'){
                    return '#E2BF65';
                } else if (type == 'rock'){
                    return '#B6A136';
                } else if (type == 'bug'){
                    return '#A6B91A';
                } else if (type == 'ghost'){
                    return '#735797';
                } else if (type == 'steel'){
                    return '#B7B7CE';
                } else if (type == 'fire'){
                    return '#EE8130';
                } else if (type == 'water'){
                    return '#6390F0';
                } else if (type == 'grass'){
                    return '#7AC74C';
                } else if (type == 'electric'){
                    return '#F7D02C';
                } else if (type == 'psychic'){
                    return '#F95587';
                } else if (type == 'ice'){
                    return '#96D9D6';
                } else if (type == 'dragon'){
                    return '#6F35FC';
                } else if (type == 'dark'){
                    return '#705746';
                } else if (type == 'fairy'){
                    return '#D685AD';
                }
            },
            formatDexEntry(entry){
                if(entry.toString().length == 1){
                    return '00' + entry;
                } else if (entry.toString().length == 2){
                    return '0' + entry;
                } else {
                    return entry;
                }
            }
        },
        mounted(){
            this.getPokemons();
        }
    }
</script>

<style lang="scss" scoped>
.pokemon-card {
    border: 2px solid #3B4CCA;
}
.pokemon-name{
    text-transform: capitalize;
}
.pokemon-details {
    border-radius: 25px;
}
</style>