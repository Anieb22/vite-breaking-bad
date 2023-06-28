<script>
import { store } from '../store';
export default {

    data() {
        return {
            store,
        }
    },
}
</script>

<template lang="">
    <div class="input-group w-25">
        <input v-model="store.nameSearched" type="text" class="form-control" 
        aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Search Pokèmon..." @keyup.enter="$emit('search')">
    </div>
</template>
<style lang="">
    
</style>