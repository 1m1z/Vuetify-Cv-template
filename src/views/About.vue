<template>
  <div class="about">
    <div class="text-center">
    <v-icon color="primary" size="100">mdi-gamepad-variant-outline</v-icon>
    <h1 class="mb-13 primary--text">{{$t('aboutme.abouttitr')}}</h1>
    </div>
  <v-container id="abouttexts">
    <p> {{$t('aboutme.p1')}}</p>
    <h2 class="secondary--text">{{$t('aboutme.h2')}} </h2>
    <p>{{$t('aboutme.p2')}}  </p>
    <h2 class="secondary--text">{{$t('aboutme.h3')}}</h2>
    <p> {{$t('aboutme.p3')}}</p>
    <h2 class="secondary--text">{{$t('aboutme.h4')}}</h2>
    <p>{{$t('aboutme.p4')}}</p>
    <h2 class="secondary--text">{{$t('aboutme.h5')}}</h2>
    <p>  {{$t('aboutme.p5')}}</p>
    <h2 class="secondary--text">{{$t('aboutme.h6')}}</h2>
    <p>{{$t('aboutme.p6')}}</p>
    <h2 class="secondary--text">{{$t('aboutme.h7')}}</h2>
    <p>{{$t('aboutme.p7')}}</p>

<div class="text-center">
  <v-card-text>
        <v-btn
          class="mx-4 "
          icon
        >
          <a href="https://www.instagram.com/amiraliglr/" target="_blank">
          <v-icon size="24px">
            mdi-instagram
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
        <a href="https://web.whatsapp.com/0919830453" target="_blank">
          <v-icon size="24px">
            mdi-whatsapp
          </v-icon>
        </a>
        </v-btn>

        <v-btn
          class="mx-4 "
          icon
        >
        <a href="https://t.me/amir011010" target="_blank">
          <v-icon size="24px">
          mdi-send
          </v-icon>
        </a>
        </v-btn>
      </v-card-text>
</div>
<div id="callmebtn">
  <v-btn id="resumebtn" outlined x-large class="primary--text" to="/cv">
    {{$t('aboutme.btn1')}}
  </v-btn>
  <v-btn id="chatbtn" outlined x-large class="purple--text" to="/contactme">
    {{$t('aboutme.btn2')}}
  </v-btn>
</div>
</v-container>
</div>
  
</template>
<script>

export default {
  name:"About",
  metaInfo: {
        title: 'About Us | درباه من'
    },
}
</script>

<style lang="scss">
#abouttexts{
  text-align: justify
};
#callmebtn{
  display: flex;
    align-items: center;
    justify-content: space-between;
}

@media screen and (max-width: 512px){
  .about{
    margin-top:70px;
  }
}
</style>