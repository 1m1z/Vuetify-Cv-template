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
          computer / web design
        </h2>
        <p class="subtitle-2">shahid avini highschool</p>
        <div>
          3 sal dar reshte web developent o tozihat
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
          Information & Techlonogy
        </h2>
        <p class="subtitle-2">shamsipour collage</p>
        <div>
          dar reshte it term 3 hatsam dars mikhonam
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
<!-- timeline 2--------------------------------------------------------------------------------------------------------- -->
<h1 class="text-center primary--text pt-16">Job Experience</h1>
<div>

    <br><br><br><br>
  <v-timeline :dense="$vuetify.breakpoint.smAndDown" id="TimeLine">
    <v-timeline-item color="purple lighten-2" fill-dot right>
      <v-card>
        <v-card-title class="purple lighten-2">
          <v-icon dark size="42" class="mr-4"> mdi-magnify </v-icon>
          <h2 class="text-h4 white--text font-weight-light">site optimization</h2>
        </v-card-title>
        <v-container>
          
              <p class="subtitle-2">from september 2017 to october 2017</p>
              <h5>negin law & financial institute</h5>
              <v-card-text>
                designing and programming the company's site and optimizing and producing content for it
              </v-card-text>
            
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item color="amber lighten-1" fill-dot left small>
      <v-card>
        <v-card-title class="amber lighten-1 justify-end">
          <h2 class="text-h4 mr-4 white--text font-weight-light">site design</h2>
          <v-icon dark size="42"> mdi-code-tags-check </v-icon>
        </v-card-title>
        <v-container>
          <p class="subtitle-2">from august 2017 to september 2017</p>
              <h5>PCRAN</h5>
              <v-card-text>
                programming and site design pcran and content production and site optimization
              </v-card-text>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item color="cyan lighten-1" fill-dot right>
      <v-card>
        <v-card-title class="cyan lighten-1">
          <v-icon class="mr-4" dark size="42"> mdi-flip-to-front </v-icon>
          <h2 class="text-h4 white--text font-weight-light">Front End Dev</h2>
        </v-card-title>
        <v-container>
          <p class="subtitle-2">from july 2019 to september 2019</p>
              <h5>royal vision</h5>
              <v-card-text>
                content production and website optimization royalvision.ir
              </v-card-text>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item color="red lighten-1" fill-dot left small>
      <v-card>
        <v-card-title class="red lighten-1 justify-end">
          <h2 class="text-h4 mr-4 white--text font-weight-light">Site developing</h2>
          <v-icon dark size="42"> mdi-code-not-equal </v-icon>
        </v-card-title>
        <v-container>
          <p class="subtitle-2">from april 2020 to may 2020</p>
              <h5>negin law & financial institute</h5>
              <v-card-text>
                site design and content production for heckfa company
              </v-card-text>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item color="green lighten-1" fill-dot right>
      <v-card>
        <v-card-title class="green lighten-1">
          <v-icon class="mr-4" dark size="42"> mdi-code-json </v-icon>
          <h2 class="text-h4 white--text font-weight-light">Freelancer</h2>
        </v-card-title>
        <v-container>
          <p class="subtitle-2">from september 2020 to present</p>
              <h5>at freelancer company</h5>
              <v-card-text>
                im accpect any project from freelancer.com and like web developing or site optimiztion and...
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