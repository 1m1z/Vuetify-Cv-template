<template>
<v-app class="cv">
    <info/>
    <h1 class="text-center danger--text pt-16">{{$t('langskill.skill')}}</h1>
    <!-- skills and languages section -->
    <skills/>
 

    <h1 class="text-center primary--text pt-16">{{$t('edu.edutitle')}}</h1>
    <!-- timeline e work and eduaction -->
    <TimeLine/>

    <h1 class="text-center primary--text pt-16 pb-14">{{$t('projects.projecttitr')}}</h1>
    <!-- project section -->
    <project class="pb-16"/>

</v-app>
</template>

<script scoped>
import Info from '@/components/Core/Information.vue'
import Skills from '@/components/Core/Skills.vue'
import TimeLine from '@/components/Core/TimeLine.vue'
import Project from '@/components/Core/Projects.vue'

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