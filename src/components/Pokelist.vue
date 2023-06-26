<script>
import axios from 'axios'
import { store } from '../store'
import AppLoader from './AppLoader.vue'
export default {
    components: {
        AppLoader
    },
    data() {
        return {
            store
        }
    },
    computed: {
        typesColors() {
            return store.typesColors;
        }
    },

    mounted() {
        axios.get(store.apiUrl).then((response) => {
            store.pokeList = response.data.docs;
            store.load = false
        })
    },

    methods: {
        getCardStyle(pokemon) {
            const backgroundColor = this.typesColors[pokemon.type1];
            return { backgroundColor };
        }
    }
}
</script>
<template lang="">
    <div class="col-12 bg-dark rounded" v-if="store.load === false">
        <div class="d-flex flex-wrap justify-content-between">
            <div v-for="(pokemon, index) in store.pokeList" :key="pokemon._id" class="card m-2 card-pokemon" :style="getCardStyle(pokemon)">
                <img :src="pokemon.imageUrl" class="card-img-top" alt="pokemon">
                <div class="card-body">
                    <p class="card-text text-center">
                        <h5>{{pokemon.number}}</h5>
                        <h4>{{pokemon.name}}</h4>
                        <h5>{{pokemon.type1}} {{pokemon.type2}}</h5>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <AppLoader v-else />
</template>
<style lang="scss" scoped>
.card-pokemon {
    width: calc(100% / 5 - 20px);
}
</style>