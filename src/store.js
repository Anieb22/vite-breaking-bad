import { reactive } from 'vue'

export const store = reactive({
    apiUrl: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons',
    pokeList: [],
    load: true,
    allTypes: [
        "Bug",
        "Dark",
        "Dragon",
        "Electric",
        "Fairy",
        "Fighting",
        "Fire",
        "Flying",
        "Ghost",
        "Grass",
        "Ground",
        "Ice",
        "Normal",
        "Poison",
        "Psychic",
        "Rock",
        "Steel",
        "Water"
    ],

    typesColors: {
        Bug: '#E6FFB0',
        Dark: '#A88FBD',
        Dragon: '#4658BD',
        Electric: '#FFFE91',
        Fairy: '#EFBBD0',
        Fighting: '#F0BB8C',
        Fire: '#F08784',
        Flying: '#ACF0E8',
        Ghost: '#63657C',
        Grass: '#9FFFAE',
        Ground: '#A88F5F',
        Ice: '#CCF6FF',
        Normal: '#CCCCCC',
        Poison: '#CC81E3',
        Psychic: '#EF88BE',
        Rock: '#BDB598',
        Steel: '#F2EDED',
        Water: '#88CFF2'
    },

    typeSelected: 'All',
    nameSearched: '',
})