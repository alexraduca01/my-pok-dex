<template>
    <div class="w-100 vh-100 overflow-hidden p-3 bg-poke-blue position-relative">
        <h1 class="m-0">Kanto</h1>
        <div class="container bg-dark-red p-4">
            <div class="row justify-content-around">
                <div class="col-7 p-0 pokemon-details position-relative" :style="`background-color: ${getBadgeColor(pokemons[activeIndex]?.types[0].type.name)}`" style="height: 90vh;">
                    <img src="/img/pokeball.png" alt="pokeball" style="position: absolute; top: 35%; right: 0; z-index: 1; width: 200px;">
                    <div class="d-flex h-50 flex-column justify-content-between position-relative" style="border-top-left-radius: 25px; border-top-right-radius: 25px;">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="form-check form-switch ms-3">
                                <input @click="getShiny()" class="form-check-input cursor-pointer" type="checkbox">
                                <label class="form-check-label" for="flexSwitchCheckDefault"><img src="/img/shiny.png" style="width: 25px;"></label>
                            </div>
                            <div>
                                <h2 class="pokemon-name text-white p-3 fs-1">{{ pokemons[activeIndex]?.name }}</h2>
                            </div>
                        </div>
                        <img v-if="!shiny" :src="pokemons[activeIndex]?.sprites.versions['generation-v']['black-white'].animated.front_default" class="position-relative align-self-center" style="width: 300px; transform: translateY(50px); z-index: 1000;" alt="pokemon image">
                        <img v-else :src="pokemons[activeIndex]?.sprites.versions['generation-v']['black-white'].animated.front_shiny" class="position-relative align-self-center" style="width: 300px; transform: translateY(50px); z-index: 1000;" alt="pokemon image">
                    </div>
                    <div class="h-50 bg-white position-relative p-5" style="z-index: 2; border-bottom-left-radius: 25px; border-bottom-right-radius: 25px;">
                        <ul class="list-unstyled d-flex justify-content-center align-items-center mt-3 gap-3">
                            <li v-for="item in pokemons[activeIndex]?.types" class="rounded-pill text-uppercase px-3 py-1 text-white" :style="`background-color: ${getBadgeColor(item.type.name)}`">{{ item.type.name }}</li>
                        </ul>
                        <div class="h-50 desc p-3 d-flex justify-content-between ">
                            <div class="d-flex flex-column justify-content-around">
                                <div>
                                    <p class="m-0">Height: {{ pokemons[activeIndex]?.height }}0 cm</p>
                                    <p>Weight: {{ formatNumber(pokemons[activeIndex]?.weight) }} Kg</p>
                                </div>
                                <ul class="list-unstyled">
                                    <li class="fs-5">Abilities:</li>
                                    <li v-for="item in pokemons[activeIndex]?.abilities">{{ item.ability.name }}</li>
                                </ul>
                            </div>
                            <div>
                                <Radar :key="radarChartKey"  ref="radarChart" :data="radarChartData" :options="options" v-if="radarChartData.labels"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-3 " style="overflow: auto; height: 90vh;">
                    <div class="pokemon-card px-1 d-flex justify-content-between bg-white align-items-center cursor-pointer" :class="activePokemon(item.game_indices[19].game_index)" v-for="item in pokemons" @click="changePokemon(item.game_indices[19].game_index), activePokemon(item.game_indices[19].game_index)">
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

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js'
import { Radar } from 'vue-chartjs';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
)

    export default {
        name: 'AppKanto',
        components: {
            Radar
        },
        data(){
            return {
                store,
                pokemons: [],
                activeIndex: 0,
                radarChartKey: 0,
                shiny: false,
                radarChartData: {
                    labels: [
                        'HP',
                        'Attack',
                        'Defense',
                        'Special Attack',
                        'Special Defense',
                        'Speed',
                    ],
                    datasets: [],
                },
                data: {
                    labels: [
                        'HP',
                        'Attack',
                        'Defense',
                        'Special-Attack',
                        'Special-Defense',
                        'Speed',
                    ],
                    datasets: [
                        {
                            label: 'Stats',
                            backgroundColor: 'rgba(179,181,198,0.2)',
                            borderColor: 'rgba(179,181,198,1)',
                            pointBackgroundColor: 'rgba(179,181,198,1)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgba(179,181,198,1)',
                            data: [0, 0, 0, 0, 0, 0],
                        },
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        r: {
                            min: 0,
                            max: 160,
                            ticks: {
                                display: false
                            }
                        }
                    }
                }
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
                    // console.log(this.pokemons);
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
            },
            changePokemon(entry){
                const selectedPokemon = this.pokemons.find(pokemon => pokemon.game_indices && pokemon.game_indices[19].game_index === entry);
                if (selectedPokemon) {
                    this.activeIndex = this.pokemons.indexOf(selectedPokemon);
                    if (selectedPokemon.stats) {
                        this.radarChartData.labels = [
                            'HP',
                            'Attack',
                            'Defense',
                            'Special Attack',
                            'Special Defense',
                            'Speed',
                        ];
                        this.radarChartData.datasets = [{
                            label: 'Stats',
                            data: selectedPokemon.stats.map(stat => stat.base_stat),
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            borderColor: 'rgba(255, 99, 132, 1)',
                            borderWidth: 1,
                        }];
                        this.radarChartKey++;
                    }   
                }
            },
            renderRadarChart() {
            new Radar(this.$refs.radarChart, {
                data: this.radarChartData,
                options: this.options
            });
            },
            activePokemon(entry){
                if(this.pokemons[this.activeIndex].game_indices[19].game_index == entry){
                    return 'bg-gray';
                }
            },
            formatNumber(number){
                let stringNumber = number?.toString();
                if(stringNumber?.length > 1){
                    let integer = stringNumber.slice(0, -1);
                    let lastNumber = stringNumber.slice(-1);
                    return integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "," + lastNumber;
                } else {
                    return stringNumber
                }
            },
            getShiny(){
                this.shiny = !this.shiny;
            }
        },
        mounted(){
            this.getPokemons();
            this.getPokemons().then(() => {
                if (this.pokemons.length > 0) {
                    // Imposta il primo Pokémon come attivo all'avvio
                    this.changePokemon(this.pokemons[0].game_indices[19].game_index);
                }
            });
        }
    }
</script>

<style lang="scss" scoped>
.pokemon-card {
    border: 2px solid #CC0000;
}
.pokemon-name{
    text-transform: capitalize;
}
.pokemon-details {
    border-radius: 25px;
}
.cursor-pointer {
    cursor: pointer;
}
.desc{
    background-color: lightgray;
    border: 2px solid black;
    border-radius: 25px;
}
</style>