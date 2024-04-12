import { reactive } from 'vue';

export const store = reactive ({
    apiUrl: 'https://pokeapi.co/api/v2/pokemon/',
    pokemons: [],
    regionName: '',
    firstEntry: 1,
    lastEntry: 1008,
})