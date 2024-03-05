<template>
    <div class="main-container h-100 w-100 bg-poke-blue pb-3">
        <div class="text-white bg-primary">
            Header
        </div>
        <div class="container p-0" style="height: 90%;">
            <div class="row h-100 mt-5 mx-0">
                <router-link v-for="item in regions" :to="{ name: item.name }" class="col-12 text-decoration-none px-sm-3 my-2 col-md-6 col-lg-4" style="min-height: 200px;">
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
                ]
            }
        },
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

@media screen and (min-width: 991px) {
    .main-container{
        height: 100vh!important;
    }
}
</style>