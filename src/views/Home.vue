<template>
  <div class="pt-6">
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

          <v-card-title primary-title>
            {{ $t("message") }}
          </v-card-title>

          <v-card-text>
            <div> guy who love every things</div>
            <p class="text-h4 text--primary">
              Amirali Golru
            </p>
            <p>working on company</p>
            <div class="text--primary">
              You will begin to realise why this exercise is called the Dickens Pattern
              (with reference to the ghost showing Scrooge some different futures)<br>
              
            </div>
              <br>
              <v-row>
                <v-col cols="12" xl="3" lg="3" md="3" sm="6" xs="6">
                <div class="text-center">
                    <v-card to="/cv" hover >
                      <v-card-title><v-img  src="../assets/Logo/Favorites/26.png"></v-img></v-card-title> 
                      <h1 class="text-center mt-5" >My Resume</h1>
                      <v-card-subtitle><v-icon>mdi-location-enter</v-icon></v-card-subtitle>
                    </v-card>
                </div>
                </v-col>
                <v-col cols="12" xl="3" lg="3" md="3" sm="6" xs="6">
                <div class="text-center" >
                    <v-card to="/about" hover>
                      <v-card-title><v-img  src="../assets/Logo/Favorites/20.png"></v-img></v-card-title> 
                      <h1 class="text-center mt-5">Biografy</h1>
                      <v-card-subtitle><v-icon>mdi-location-enter</v-icon></v-card-subtitle>
                    </v-card>
                </div>
                </v-col>
                <v-col cols="12" xl="3" lg="3" md="3" sm="6" xs="6">
                <div class="text-center">
                    <v-card to="/blog" hover>
                      <v-card-title><v-img  src="../assets/Logo/Favorites/15.png"></v-img></v-card-title> 
                      <h1 class="text-center mt-5">Blog</h1>
                      <v-card-subtitle><v-icon>mdi-location-enter</v-icon></v-card-subtitle>
                    </v-card>
                </div>
                </v-col>
                <v-col cols="12" xl="3" lg="3" md="3" sm="6" xs="6">
                <div class="text-center">
                    <v-card to="/contactme" hover>
                      <v-card-title><v-img  src="../assets/Logo/Favorites/23.png"></v-img></v-card-title> 
                      <h1 class="text-center mt-5">Contact Me</h1>
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
          <v-icon size="24px">
            mdi-facebook
          </v-icon>
          
        </v-btn>

        <v-btn
          class="mx-4"
          icon
        >
          <v-icon size="24px">
            mdi-facebook
          </v-icon>
          
        </v-btn>

        <v-btn
          class="mx-4"
          icon
        >
          <v-icon size="24px">
            mdi-facebook
          </v-icon>
          
        </v-btn>

        <v-btn
          class="mx-4 "
          icon
        >
          <v-icon size="24px">
            mdi-facebook
          </v-icon>
          
        </v-btn>
      </v-card-text>

      <!-- cols haddddddddddddddddddddddddddd -->

      <v-row>
        <v-col cols="12" xl="4" lg="4" md="4" sm="12" xs="12">
          <v-card-text class="text-justify ">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </v-card-text>
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

    <v-card-text class="text-h5 font-weight-bold">
      "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
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
          <!-- <div class="pt-4"> <v-icon>mdi-phone</v-icon> telephone</div>
          <div class="pt-4"> <v-icon>mdi-account</v-icon>44 (012) 6954 783</div>
          <div class="pt-4"> <v-icon>mdi-account</v-icon> instagram</div>
          <div class="pt-4"> <v-icon>mdi-account</v-icon> instagram</div> -->
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
        
      }
    },
    components: {

    },
  }
</script>


<style lang="scss" >


#HomeRow{
  background-color: #2B2B2B;
  padding-top: 20px ;
  
};



</style>