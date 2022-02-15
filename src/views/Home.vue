<template>
  <div class="pt-6">
    <v-btn @onClick="installer()" :style="{'display':installBtn}">
    Add to home screen
    </v-btn>
    <v-row class="rounded-xl" id="HomeRow">
      <v-col id="ImgCol" cols="12" xl="4" lg="4" md="4" sm="12" xs="12">
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            src="@/assets/Face2-2.png"
            max-width="800px"
            max-height="500px"
            class="rounded-b-pill"
          ></v-img>
      </v-col>

      
      <v-col id="AboutCol" cols="12" xl="8" lg="8" md="8" sm="12" xs="12">
        <v-card
        elevation="24"
        class="rounded-xl"
        >
          <v-card-text>
            <div> {{ $t('home.part1.jobtitle')}}</div>
            <p class="text-h4 text--primary">
               {{ $t('home.part1.name')}}
            </p>
            <p> {{ $t('home.part1.looking')}}</p>
            <div class="text--primary">
               {{ $t('home.part1.hibody')}}<br>
               {{ $t('home.part1.shortabout')}}
            </div>
              <br>
              <v-row>
                <v-col cols="12" xl="3" lg="3" md="3" sm="6" xs="6">
                <div class="text-center">
                    <v-card to="/cv" hover >
                      <v-card-title><v-img  src="../assets/Logo/Favorites/26.png"></v-img></v-card-title> 
                      <h1 class="text-center mt-5 font-weight" > {{ $t('home.part1.buttons.cv')}}</h1>
                      <v-card-subtitle><v-icon>mdi-location-enter</v-icon></v-card-subtitle>
                    </v-card>
                </div>
                </v-col>
                <v-col cols="12" xl="3" lg="3" md="3" sm="6" xs="6">
                <div class="text-center" >
                    <v-card to="/about" hover>
                      <v-card-title><v-img  src="../assets/Logo/Favorites/20.png"></v-img></v-card-title> 
                      <h1 class="text-center mt-5">{{ $t('home.part1.buttons.bio')}}</h1>
                      <v-card-subtitle><v-icon>mdi-location-enter</v-icon></v-card-subtitle>
                    </v-card>
                </div>
                </v-col>
                <v-col cols="12" xl="3" lg="3" md="3" sm="6" xs="6">
                <div class="text-center">
                    <v-card to="/blog" hover>
                      <v-card-title><v-img  src="../assets/Logo/Favorites/15.png"></v-img></v-card-title> 
                      <h1 class="text-center mt-5">{{ $t('home.part1.buttons.blog')}}</h1>
                      <v-card-subtitle><v-icon>mdi-location-enter</v-icon></v-card-subtitle>
                    </v-card>
                </div>
                </v-col>
                <v-col cols="12" xl="3" lg="3" md="3" sm="6" xs="6">
                <div class="text-center">
                    <v-card to="/contactme" hover>
                      <v-card-title><v-img  src="../assets/Logo/Favorites/23.png"></v-img></v-card-title> 
                      <h1 class="text-center mt-5">{{ $t('home.part1.buttons.contact')}}</h1>
                      <v-card-subtitle><v-icon>mdi-location-enter</v-icon></v-card-subtitle>
                    </v-card>
                </div>
                </v-col>
              </v-row>
          </v-card-text>

        </v-card>
        
      </v-col>
    <!-- -----footer--------------------------- -->
      
<v-footer
    color="#64C69F"
    class="rounded-xl"
  >
    <v-card
      flat
      tile
      color="#64C69F"
      class="blue-g lighten-1 text-center rounded-xl"
    >
      <v-card-text>
        <v-btn
          class="mx-4 "
          icon
        >
          <a href="https://github.com/AMiRZzZzZz" target="_blank">
          <v-icon size="24px">
            mdi-github
          </v-icon>
          </a>
        </v-btn>

        <v-btn
          class="mx-4"
          icon
        >
        <a href="https://www.linkedin.com/in/amirali-golru-1ba1661b4/" target="_blank">
          <v-icon size="24px" >
            
            mdi-linkedin
          </v-icon>
          </a>
        </v-btn>

        <v-btn
          class="mx-4"
          icon
        >
        <a href="https://steamcommunity.com/id/AMIRZZZZZZ/" target="_blank">
          <v-icon size="24px">
            mdi-steam
          </v-icon>
        </a>
        </v-btn>

        <v-btn
          class="mx-4 "
          icon
        >
        <a href="https://www.origin.com/deu/de-de/profile/achievements" target="_blank">
          <v-icon size="24px">
            mdi-origin
          </v-icon>
        </a>
        </v-btn>
      </v-card-text>

      <!-- cols haddddddddddddddddddddddddddd -->

      <v-row>
        <v-col cols="12" xl="4" lg="4" md="4" sm="12" xs="12">
          <v-card-title primary-title>
            {{$t('home.part2.pwatitle')}}
          </v-card-title>
          <v-card-text class="text-justify">
            {{$t('home.part2.pwatext')}}
          </v-card-text>
          <v-row>
            <v-col>
              <a href="https://vuejs.org/" target="_blank">
              <v-icon size="100">mdi-vuejs</v-icon>
              <h4>vue js</h4>
              </a>
            </v-col>
            <v-col>
              <a href="https://vuetifyjs.com/en/" target="_blank">
              <v-icon size="100">mdi-vuetify</v-icon>
              <h4>vuetify</h4>
              </a>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" xl="5" lg="5" md="5" sm="12" xs="12">
          <v-card
    class="mb-3 rounded-xl"
    color="#26c6da"
    dark
    hover
    href="https://mobile.twitter.com/amir011010"
  >
    <v-card-title>
      <v-icon
        large
        left
      >
        mdi-twitter
      </v-icon>
      <span class="text-h6 font-weight-light">Twitter</span>
    </v-card-title>

    <v-card-text class="text-h5 font-weight-bold ">
      {{$t('home.part2.tiwter')}}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            src="../assets/Face2.png"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="pt-auto text-left">AmirZzZ</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card-actions>
  </v-card>
</v-col>

        <v-col cols="12" xl="3" lg="3" md="3" sm="12" xs="12">
          <v-chip
          color="red"
          class="ma-1"
          link
          :to="{name : 'Post1'}"
          >
          technologys
          </v-chip>
          <v-chip
          color="red"
          class="ma-1"
          link
          :to="{name : 'Post1'}"
          >
          technologys
          </v-chip>
          <v-chip
          color="red"
          class="ma-1"
          link
          :to="{name : 'Post1'}"
          >
          technologys
          </v-chip>
          <v-chip
          color="red"
          class="ma-1"
          link
          :to="{name : 'Post1'}"
          >
          technologys
          </v-chip>
          <v-chip
          color="red"
          class="ma-1"
          link
          :to="{name : 'Post1'}"
          >
          technologys
          </v-chip>
          <v-chip
          color="red"
          class="ma-1"
          link
          :to="{name : 'Post1'}"
          >
          technologys
          </v-chip>
          <v-chip
          color="red"
          class="ma-1"
          link
          :to="{name : 'Post1'}"
          >
          technologys
          </v-chip>
          <v-chip
          color="red"
          class="ma-1"
          link
          :to="{name : 'Post1'}"
          >
          technologys
          </v-chip>
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <v-card-text class="">
        {{ new Date().getFullYear() }} — <strong>Amirali Golru</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</v-row>

    
  </div>
</template>

<script>

  export default {
    name: 'Home',
     data () {
      return {
        
        installBtn:"none",
        installer:undefined
      };
    },
    
    created() {
      let installPrompt;
      window.addEventListener("beforeinstallprompt",e=>{
        e.preventDefault();
        installPrompt = e;
        this.installBtn = "block";
      });
      this.installer=()=>{
        this.installBtn="none";
        installPrompt.prompt();
        installPrompt.userChoice.then(result =>  {
          if (result.outcome === "accepted") {
            console.log("user accepted");
          }else{
            console.log("user denied");
          }
          installPrompt = null;
        })
      }
    },
    components: {

    },
  }
</script>


<style lang="scss" >

a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
      outline: none;
      border:none; 
};
#HomeRow{
  background-color: #2B2B2B;
  padding-top: 20px ;
  
};



</style>