<script>
export default {

}
</script>


<template lang="">
    <div class="col-12 d-flex justify-content-center align-items-center" style="height: 700px">
        <img src="../assets/img/pokeball_icon.png" class="loader" alt="">
    </div>
</template>
<style lang="scss" scoped>
.loader {
    width: 200px;
    height: 200px;
    -webkit-animation: spin 2s linear infinite;
    /* Safari */
    animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>