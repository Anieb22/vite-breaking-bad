<script>
import Pokelist from './Pokelist.vue';
import { store } from '../store';

export default {
    components: {
        Pokelist
    },

    data() {
        return {
            store
        }
    },
}
</script>
<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <Pokelist />
                </div>
            </div>
        </div>
    </main>
</template>
<style lang="scss" scoped></style>