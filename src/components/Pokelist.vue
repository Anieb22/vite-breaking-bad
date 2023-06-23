<script>
import axios from 'axios'
export default {
    data() {
        return {
            pokeList: []
        }
    },
    mounted() {
        axios.get('https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons').then((response) => {
            this.pokeList = response.data.docs;
        })
    },
}
</script>
<template lang="">
    <div class="col-12 d-flex flex-wrap justify-content-between">
        <div v-for="(pokemon, index) in pokeList" :key="pokemon._id" class="card m-2 card-pokemon">
  <img :src="pokemon.imageUrl" class="card-img-top rouded" alt="pokemon">
  <div class="card-body">
    <p class="card-text text-center">
        <h5>{{pokemon.number}}</h5>
        <h3>{{pokemon.name}}</h3>
        <h5>{{pokemon.type1}}</h5>
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