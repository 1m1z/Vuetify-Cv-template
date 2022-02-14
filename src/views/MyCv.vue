<template>
<v-app class="cv">
    <info/>

    <h1 class="text-center danger--text pt-16">{{$t('langskill.skill')}}</h1>

    <skills/>
 

    <h1 class="text-center primary--text pt-16">{{$t('edu.edutitle')}}</h1>

    <TimeLine/>

    <h1 class="text-center primary--text pt-16 pb-14">My Project</h1>

    <project class="pb-16"/>

    <!-- <h1 class="text-center primary--text">contact me</h1>

    <contact/> -->
</v-app>
</template>

<script scoped>
import Info from '@/components/Core/Information.vue'
import Skills from '@/components/Core/Skills.vue'
import TimeLine from '@/components/Core/TimeLine.vue'
import Project from '@/components/Core/Projects.vue'
// import Contact from '@/views/ContactMe.vue'

export default {
    name:'MyCv',
    metaInfo: {
        title: 'my resume | رزومه من'
    },
    components:{
        Info,
        Skills,
        TimeLine,
        Project,
        // Contact
    },
data: ()=> {
    return{

    }
  }
}
</script>

<style lang="scss">
@media screen and (max-width: 512px){
  .cv{
    margin-top:50px;
  }
}
</style>