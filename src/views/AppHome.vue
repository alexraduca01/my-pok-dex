<template>
    <div class="main-container h-100 w-100 bg-poke-blue pb-3">
        <AppHeader />
        <div class="container p-0" style="height: 90%;">
            <div class="row h-100 mt-5 mx-0">
                <router-link v-for="item in regions" :regionName="item.label" @click="getRegionName(item.label)" :to="{ name: item.name }" class="col-12 text-decoration-none px-sm-3 my-2 col-md-6 col-lg-3" style="min-height: 200px;">
                    <div :class="item.name" class="w-100 h-100 region-bg">
                        <div class="card-bg w-100 h-100 d-flex justify-content-center align-items-center">
                            <p class="mt-5 pt-5 fs-1 text-white">{{ item.label }}</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store';
import AppHeader from '../components/AppHeader.vue';

    export default {
        name: 'AppHome',
        components: {
            AppHeader,
        },
        data() {
            return {
                store,
                regions: [
                    {
                        id: 2,
                        label: "Kanto",
                        name: "kanto",
                    },
                    {
                        id: 3,
                        label: "Johto",
                        name: "johto",
                    },
                    {
                        id: 4,
                        label: "Hoenn",
                        name: "hoenn",
                    },
                    {
                        id: 5,
                        label: "Sinnoh",
                        name: "sinnoh",
                    },
                    {
                        id: 9,
                        label: "Unova",
                        name: "unova",
                    },
                    {
                        id: 21,
                        label: "Alola",
                        name: "alola",
                    },
                    {
                        id: 27,
                        label: "Galar",
                        name: "galar",
                    },
                    {
                        id: 31,
                        label: "Paldea",
                        name: "paldea",
                    },
                ]
            }
        },
        methods: {
            getRegionName(name) {
                store.regionName = '';
                store.regionName = name;
                store.pokemons = [];
            }
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