<script>
import AppSelect from './AppSelect.vue';
import AppSearch from './AppSearch.vue';
import { store } from '../store';
import axios from 'axios'
export default {
    components: {
        AppSelect,
        AppSearch
    },

    mounted() {
        this.nameSearched()
    },

    methods: {
        nameSearched() {
            console.log(store.nameSearched);
            let myUrl = store.apiUrl;
            if (store.nameSearched !== '') {
                myUrl += `?q[name]=${store.nameSearched}`;

                axios.get(myUrl).then((response) => {
                    store.pokeList = response.data.docs;
                    store.load = false
                })
            }
        },
    },
}
</script>
<template>
    <header>
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-between align-items-center">
                    <img src="../assets/img/lucine-pokedex.png" class="w-25" alt="image">
                    <AppSearch @search="nameSearched" />
                    <AppSelect />
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped></style>