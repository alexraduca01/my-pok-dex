<template>
    <div class="vh-100 w-100 bg-poke-blue d-flex flex-column justify-content-center">
        <div class="w-100 h-100">
            <ul class="row list-unstyled h-50 gap-3 mx-0 align-items-center justify-content-center ">
                <li class="col-2 region-bg p-0 mx-2 mt-3" v-for="item in regions" :class="item.name">
                    <router-link :to="{ name: item.name }" class="text-decoration-none">
                        <div class="card-bg d-flex justify-content-center align-items-end h-100 w-100">
                            <h2 class="text-white pb-5 fs-1">{{ item.label }}</h2>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../store';

    export default {
        name: 'AppHome',
        data() {
            return {
                store,
                regions: [
                    {
                        label: "Kanto",
                        name: "kanto",
                    },
                    {
                        label: "Johto",
                        name: "johto",
                    },
                    {
                        label: "Hoenn",
                        name: "hoenn",
                    },
                    {
                        label: "Sinnoh",
                        name: "sinnoh",
                    },
                    {
                        label: "Unova",
                        name: "unova",
                    },
                    {
                        label: "Kalos",
                        name: "kalos",
                    },
                    {
                        label: "Alola",
                        name: "alola",
                    },
                    {
                        label: "Galar",
                        name: "galar",
                    },
                    {
                        label: "Paldea",
                        name: "paldea",
                    },
                    {
                        label: "Hisui",
                        name: "hisui",
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
.kanto {
    background-image: url('./img/kanto.jpg');
    background-position: -100px!important;
}
.johto {
    background-image: url('./img/johto.jpg');
    background-position: -350px!important;
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
.hisui {
    background-image: url('./img/hisui.jpg');
}
.region-bg {
    background-size: cover;
    background-position: center;
    height: 95%;
    background-repeat: no-repeat;
    border-radius: 35px;
    border: 2px solid white;
}
.card-bg {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 35px;
}
</style>