<script>
import AppSelect from './AppSelect.vue';
import AppSearch from './AppSearch.vue';
export default {
    components: {
        AppSelect,
        AppSearch
    }
}
</script>
<template>
    <header>
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-between align-items-center">
                    <img src="../assets/img/lucine-pokedex.png" class="w-25" alt="image">
                    <AppSearch />
                    <AppSelect />
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped></style>