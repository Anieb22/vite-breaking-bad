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
            let myUrl = store.apiUrl;

            const queryParams = [];

            if (store.nameSearched !== '') {
                queryParams.push(`q[name]=${store.nameSearched}`);
            }

            if (store.typeSelected !== 'All') {
                queryParams.push(`q[type1]=${store.typeSelected}`);
            }

            if (queryParams.length > 0) {
                myUrl += '?' + queryParams.join('&');
            }

            axios.get(myUrl).then((response) => {
                store.pokeList = response.data.docs;
                store.load = false
            })

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
                    <AppSelect @search="nameSearched" />
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped></style>