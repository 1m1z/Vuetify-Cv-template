<template>
<v-app>
<br><br>
<!-- timeline-1------------------ -->
<div >
  
  
  <v-timeline :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item 
      color="red"
      small
    >
      <template v-slot:opposite>
        <span
          class="`headline font-weight-bold "
          v-text="`2017 - 2020`"
        >mn</span>
      </template>
      <div class="py-4">
        <h2 class="headline font-weight-light mb-4 ">
            {{$t('edu.schoolmajor')}}
        </h2>
        <p class="subtitle-2">{{$t('edu.schoolname')}}</p>
        <div>
          {{$t('edu.schoolabout')}}
        </div>
      </div>
    </v-timeline-item>

    <v-timeline-item
      color="red"
      medium
    >
      <template v-slot:opposite>
        <span
          class="`headline font-weight-bold "
          v-text="`2020 - present`"
        >mn</span>
      </template>
      <div class="py-4">
        <h2 class="headline font-weight-light mb-4 ">
          {{$t('edu.collagemajor')}}
        </h2>
        <p class="subtitle-2">{{$t('edu.collagename')}}</p>
        <div>
          {{$t('edu.collageabout')}}
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
<!-- timeline 2--------------------------------------------------------------------------------------------------------- -->
<h1 class="text-center primary--text pt-16">{{$t('job.jobtitr')}}</h1>
<div>

    <br><br><br><br>
  <v-timeline :dense="$vuetify.breakpoint.smAndDown" id="TimeLine">
    <v-timeline-item color="purple lighten-2" fill-dot right>
      <v-card>
        <v-card-title class="purple lighten-2">
          <v-icon dark size="42" class="mr-4"> mdi-magnify </v-icon>
          <h2 class="text-h4 white--text font-weight-light">{{$t('job.section1.jobtitle')}}</h2>
        </v-card-title>
        <v-container>
          
              <p class="subtitle-2">{{$t('job.section1.jobdate')}}</p>
              <h5>{{$t('job.section1.jobloc')}}</h5>
              <v-card-text>
                {{$t('job.section1.jobabout')}}
              </v-card-text>
            
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item color="amber lighten-1" fill-dot left small>
      <v-card>
        <v-card-title class="amber lighten-1 justify-end">
          <h2 class="text-h4 mr-4 white--text font-weight-light">{{$t('job.section2.jobtitle')}}</h2>
          <v-icon dark size="42"> mdi-code-tags-check </v-icon>
        </v-card-title>
        <v-container>
          <p class="subtitle-2">{{$t('job.section2.jobdate')}}</p>
              <h5>{{$t('job.section2.jobloc')}}</h5>
              <v-card-text>
                {{$t('job.section2.jobabout')}}
              </v-card-text>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item color="cyan lighten-1" fill-dot right>
      <v-card>
        <v-card-title class="cyan lighten-1">
          <v-icon class="mr-4" dark size="42"> mdi-flip-to-front </v-icon>
          <h2 class="text-h4 white--text font-weight-light">{{$t('job.section3.jobtitle')}}</h2>
        </v-card-title>
        <v-container>
          <p class="subtitle-2">{{$t('job.section3.jobdate')}}</p>
              <h5>{{$t('job.section3.jobloc')}}</h5>
              <v-card-text>
                {{$t('job.section3.jobabout')}}
              </v-card-text>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item color="red lighten-1" fill-dot left small>
      <v-card>
        <v-card-title class="red lighten-1 justify-end">
          <h2 class="text-h4 mr-4 white--text font-weight-light">{{$t('job.section4.jobtitle')}}</h2>
          <v-icon dark size="42"> mdi-code-not-equal </v-icon>
        </v-card-title>
        <v-container>
          <p class="subtitle-2">{{$t('job.section4.jobdate')}}</p>
              <h5>{{$t('job.section4.jobloc')}}</h5>
              <v-card-text>
                {{$t('job.section4.jobabout')}}
              </v-card-text>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item color="green lighten-1" fill-dot right>
      <v-card>
        <v-card-title class="green lighten-1">
          <v-icon class="mr-4" dark size="42"> mdi-code-json </v-icon>
          <h2 class="text-h4 white--text font-weight-light">{{$t('job.section5.jobtitle')}}</h2>
        </v-card-title>
        <v-container>
          <p class="subtitle-2">{{$t('job.section5.jobdate')}}</p>
              <h5>{{$t('job.section5.jobloc')}}</h5>
              <v-card-text>
                {{$t('job.section5.jobabout')}}
              </v-card-text>
        </v-container>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</div>

</div>

  
</v-app>
</template>


<script>
export default {
  name: "TimeLine",
    data() {
        return {
          hide: true,
        }
    },
  methods: {
    
    }
  
};
</script>

<style lang="scss">
</style>