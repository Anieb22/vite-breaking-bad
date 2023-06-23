<script>
import Pokelist from './Pokelist.vue';

export default {
    components: {
        Pokelist
    }
}
</script>
<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12 m-4 bg-dark rounded">
                    <div class="col-12">
                        <Pokelist />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<style lang="scss" scoped></style>