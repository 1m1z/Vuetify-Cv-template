<template>
    <v-app>
        <v-row>
            <v-col cols="12" xl="4" lg="4" md="6" sm="12" xs="12">
                <v-card
    class="mx-auto"
    max-width="344"
    >
    <v-img
      src="../../assets/Pics/royalvision.png"
      height="200px"
      alt="royalvision"
      lazy
    ></v-img>

    <v-card-title>
      Royal vision
    </v-card-title>

    <v-card-subtitle>
      Building and optimizition wordpress site for hamrah kian technology
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange"
        text
        href="https://royalvision.ir/"
        target="_blank"
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

            <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
            </div>
        </v-expand-transition>
        </v-card>
            </v-col>

            <v-col cols="12" xl="4" lg="4" md="6" sm="12" xs="12">
                <v-card
    class="mx-auto"
    max-width="344"
    >
    <v-img
      src="../../assets/Pics/hekfa.png"
      height="200px"
    ></v-img>

    <v-card-title>
      HEKFA
    </v-card-title>

    <v-card-subtitle>
      Building and optimizition wordpress site for hamrah kian technology
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange"
        text
        href="https://www.hekfa.ir/"
        target="_blank"
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show2 = !show2"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show2">
        <v-divider></v-divider>

            <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
            </div>
        </v-expand-transition>
        </v-card>
            </v-col>

            <v-col cols="12" xl="4" lg="4" md="6" sm="12" xs="12">
                <v-card
    class="mx-auto"
    max-width="344"
    >
    <v-img
      src="../../assets/Pics/amiralig.png"
      height="200px"
      lazy
    ></v-img>

    <v-card-title>
      Personal Bootstrap Template
    </v-card-title>

    <v-card-subtitle>
      my personal bootstrap template like CV
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange"
        text
        href="http://amiralig.gigfa.com/?i=1"
        target="_blank"
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show3 = !show3"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show3">
        <v-divider></v-divider>

            <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
            </div>
        </v-expand-transition>
        </v-card>
            </v-col>
        </v-row>
    </v-app>
</template>

<script>
export default {
    name:'Project',
    data: () => ({
        show: false,
        show2:false,
        show3:false,
        show4:false,
        show5:false,
        show6:false,
    }),
    
}
</script>

<style lang="scss">

</style>