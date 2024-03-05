<template>
    <div>
        <h1>Kanto</h1>
        <div class="container">
            <div class="row">
                <div class="pokemon-card bg-poke-blue col-2 p-2 py-4 d-flex flex-column justify-content-center align-items-center" v-for="item in pokemons">
                    <img class="mb-5" :src="item.sprites.other.showdown.front_default" style="height: 75px;" :alt="item.name">
                    <p class="fs-3 mb-2 m-0 text-white pokemon-name">{{ item.name }}</p>
                    <ul class="list-unstyled d-flex gap-3">
                        <li v-for="item in item.types" class="text-white px-3 py-1 rounded-pill" :style="`background-color: ${getBadgeColor(item.type.name)}`">{{ item.type.name }}</li>
                    </ul>
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
        },
        mounted(){
            this.getPokemons();
        }
    }
</script>

<style lang="scss" scoped>
.pokemon-card {
    border: 2px solid white;
}
.pokemon-name{
    text-transform: capitalize;
}
</style>