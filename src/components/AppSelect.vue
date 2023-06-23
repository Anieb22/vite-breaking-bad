<script>
import { store } from '../store'

export default {
    data() {
        return {
            store
        }
    }
}
</script>
<template lang="">
    <select class="form-select w-25" aria-label="Default select example">
  <option selected>Filtra per Tipo</option>
  <option value="1" v-for="(type, index) in store.allTypes" :key="index">{{type}}</option>
</select>
</template>
<style lang="">
    
</style>