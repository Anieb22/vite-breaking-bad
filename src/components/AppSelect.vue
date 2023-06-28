<script>
import { store } from '../store'

export default {
    emits: ['search'],
    data() {
        return {
            store
        }
    },

    methods: {
        sendSearch() {
            console.log(store.typeSelected)
            this.$emit('search')
        }
    },
}
</script>
<template lang="">
    <select class="form-select w-25" aria-label="Default select example" v-model="store.typeSelected" @change="sendSearch">
  <option :value="type" v-for="(type, index) in store.allTypes" :key="index">{{type}}</option>
</select>
</template>
<style lang="">
    
</style>