<template>
<v-app>
    <div class="text-center" id="notfound">
        <h1 class="mt-10"> {{$t('pagenotfound.errortext')}} </h1>
        <v-img class="text-center mt-10" src="../../assets/Pics/404notfound.jpg"></v-img>
        <h1  class="mt-10">{{$t('pagenotfound.title')}}</h1>
        <v-btn class="mt-10" x-large color="purple" to="/">{{$t('pagenotfound.bottom')}}</v-btn>
    </div>
</v-app>
</template>

<script>
export default {
    name :'NotFound',
}
</script>

<style lang="scss" scoped>
    #notfound {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 30%;
        
    }

</style>