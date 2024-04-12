<template>
    <div class="main-container vh-100 w-100 bg-poke-blue pb-3 overflow-hidden ">
        <AppHeader />
        <div class="container p-0" style="height: 90%;">
            <div class="row h-75 my-5 py-5 mx-0">
                <swiper :effect="'cards'" :grabCursor="true" :modules="modules" :loop="true" class="mySwiper h-100">
                    <swiper-slide v-for="item in regions" style="border-radius: 25px;">
                        <router-link :regionName="item.label" @click="getRegionName(item.label), chooseRegion(item.first, item.last)" :to='"/pokedex"' class="text-decoration-none">
                                <div :class="item.name" class="w-100 h-100 region-bg">
                                    <div class="card-bg w-100 h-100 d-flex justify-content-center align-items-center">
                                        <p class="mt-5 pt-5 fs-1 text-white">{{ item.label }}</p>
                                    </div>
                                </div>
                        </router-link>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>

    

</template>

<script>
import { store } from '../store';
import AppHeader from '../components/AppHeader.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';

    export default {
        name: 'AppHome',
        components: {
            AppHeader,
            Swiper,
            SwiperSlide,
        },
        data() {
            return {
                store,
                regions: [
                    {
                        id: 1,
                        label: "Kanto",
                        name: "kanto",
                        first: 1,
                        last: 151,
                    },
                    {
                        id: 2,
                        label: "Johto",
                        name: "johto",
                        first: 152,
                        last: 251,
                    },
                    {
                        id: 3,
                        label: "Hoenn",
                        name: "hoenn",
                        first: 252,
                        last: 386,
                    },
                    {
                        id: 4,
                        label: "Sinnoh",
                        name: "sinnoh",
                        first: 387,
                        last: 493,
                    },
                    {
                        id: 5,
                        label: "Unova",
                        name: "unova",
                        first: 494,
                        last: 649,
                    },
                    {
                        id: 6,
                        label: "Kalos",
                        name: "kalos",
                        first: 650,
                        last: 721,
                    },
                    {
                        id: 7,
                        label: "Alola",
                        name: "alola",
                        first: 722,
                        last: 809,
                    },
                    {
                        id: 8,
                        label: "Galar",
                        name: "galar",
                        first: 810,
                        last: 898,
                    },
                    {
                        id: 9,
                        label: "Paldea",
                        name: "paldea",
                        first: 906,
                        last: 1010,
                    },
                    {
                        id: 10,
                        label: "National",
                        name: "national",
                        first: 1,
                        last: 1010,
                    }
                ],
                modules: [EffectCards],
            }
        },
        methods: {
            getRegionName(name) {
                store.regionName = '';
                store.regionName = name;
                store.pokemons = [];
            },
            chooseRegion(firstEntry, lastEntry) {
                store.firstEntry = firstEntry;
                store.lastEntry = lastEntry;
            }
        },
        mounted(){
            store.regionName = '';
        }
    }
</script>

<style lang="scss" scoped>
.kanto {
    background-image: url('./img/kanto.jpg');
}
.johto {
    background-image: url('./img/johto.jpg');
}
.hoenn {
    background-image: url('./img/hoenn.jpg');
    background-position: left!important;
}
.sinnoh {
    background-image: url('./img/sinnoh.jpg');
}
.unova {
    background-image: url('./img/unova.jpg');
}
.kalos {
    background-image: url('./img/kalos.jpg');
    background-position: right!important;
}
.alola {
    background-image: url('./img/alola.jpg');
}
.galar {
    background-image: url('./img/galar.jpg');
}
.paldea {
    background-image: url('./img/paldea.jpg');
}
.national {
    background-image: url('./img/national.jpg');
}
.region-bg {
    background-size: cover;
    background-position: center;
    height: 95%;
    background-repeat: no-repeat;
    border-radius: 35px;
    border: 2px solid white;
}
.region-bg:hover .card-bg{
    background: none;
}
.card-bg {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 35px;
    transition: background 1s linear;
}

@media screen and (min-width: 768px) {
    .main-container{
        height: 100vh!important;
    }
}
</style>