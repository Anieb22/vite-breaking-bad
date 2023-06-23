<script>
import axios from 'axios'
import { store } from '../store'
export default {
    data() {
        return {
            store
        }
    },
    mounted() {
        axios.get(store.apiUrl).then((response) => {
            store.pokeList = response.data.docs;
        })
    },
}
</script>
<template lang="">
    <div class="col-12 d-flex flex-wrap justify-content-between">
        <div v-for="(pokemon, index) in store.pokeList" :key="pokemon._id" class="card m-2 card-pokemon">
  <img :src="pokemon.imageUrl" class="card-img-top rouded" alt="pokemon">
  <div class="card-body">
    <p class="card-text text-center">
        <h5>{{pokemon.number}}</h5>
        <h4>{{pokemon.name}}</h4>
        <h5>{{pokemon.type1}} {{pokemon.type2}}</h5>
        
    </p>
  </div>
</div>
    </div>
</template>
<style lang="scss" scoped>
.card-pokemon {
    width: calc(100% / 5 - 20px);
}
</style>