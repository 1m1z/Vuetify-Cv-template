<template>
<v-app>
  <v-row id="FooterRow" class="accent">
    
    <v-col>
      <v-btn
        color="primary"
        icon
        rounded
        to="/cv"
      >
       <v-icon>mdi-account-circle-outline</v-icon>
      </v-btn>
    </v-col>



    <v-col>
      <v-btn
        color="primary"
        icon
        rounded
        to="/about"
      >
       <v-icon>mdi-card-text-outline</v-icon>
      
      </v-btn>
    </v-col>





    <v-col>
      <v-btn 
        color="primary"
        icon
        rounded
      >
       <v-icon color="">mdi-book-open-outline</v-icon>
      </v-btn>
    </v-col>


<v-col>
      <v-btn
        color="primary"
        icon
        rounded
        :to="{name : 'Home'}"
      >
       <v-icon size="30">mdi-home-outline</v-icon>
      </v-btn>
    </v-col>


<v-col>
      <v-btn 
        color="primary"
        icon
        rounded
      >
       <v-icon color="">mdi-chat-plus-outline</v-icon>
      
      </v-btn>
</v-col>



<v-col>
        <v-btn @click="submit()"
        color="danger"
        icon
        rounded
      >
       <v-icon v-model="this.$vuetify.theme.dark">mdi-theme-light-dark</v-icon>
       
      
      </v-btn>
    </v-col>

    <v-col class="text-center rounded-xl ">
      <select class=" rounded-xl pa-1 font-weight-black" v-model="$i18n.locale">
      <option class="accent rounded-xl pa-4 font-weight-black" v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
        {{ lang }}
      </option>
      </select>
    </v-col>



  
  </v-row>
</v-app>
</template>

<script>
  export default {

    data() {
      return {
        name: 'locale-changer',
        langs: ['fa', 'en'] ,
      }
    },
      methods: {
  submit(){
    this.$vuetify.theme.dark =! this.$vuetify.theme.dark
  },
},
  computed: {
      color () {
        switch (this.value) {
          case 0: return 'blue-grey'
          case 1: return 'teal'
          case 2: return 'brown'
          case 3: return 'indigo'
          default: return 'blue-grey'
        }
      },
    },
  }
</script>



  <style lang="scss">
  #FooterRow{
  left: unset;
  top: 320px;
  right: 0px;
  display: flex;
  flex-direction: column;
  position: fixed;
  margin: auto;
  align-items: center;
  
  border-radius: 20px 0px 0px 20px;
};





@media screen and (max-width: 512px){
  #FooterRow{
    display: flex;
    flex-direction:row;
    left: 0px;
    top: 0px;
    right: 0px;
    border-radius: 0px 0px 40px 40px;
    position: fixed;
    margin: auto;
    align-items: center;
  }
}
  </style>