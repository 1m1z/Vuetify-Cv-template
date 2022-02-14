<template>
  <v-app>
<!-- content -->
    <v-main id="main">
       <v-container id="maincontainer">
        <router-view/>
       </v-container>
    </v-main>
<!-- content -->
<!-- footer -->
    <v-footer>
      <Menu/>
    </v-footer>
<!-- footer -->
  </v-app>
</template>

<script>
import Menu from '@/components/Base/Menu.vue'

import {
  setDocumentDirectionPerLocale,
  setDocumentLang
} from "@/i18n.js"
export default {
  name: 'App',
  metaInfo: {
      title: 'Home | خانه',
    },
  components:{
    Menu
  },
  mounted() {
    this.$watch(
      "$i18n.locale",
      (newLocale, oldLocale) => {
        if (newLocale === oldLocale) {
          return
        }
        setDocumentLang(newLocale)
        setDocumentDirectionPerLocale(newLocale)
      },
      { immediate: true}
    )
  },

  data: () => ({
    
  }),

}

</script>

<style lang="scss">
// .v-application--wrap{
//   min-height: max-content;
// };

#AppBar{
  position: sticky;
  height: 4px;
  
};
#AppBarRow{
height: 10px;
};
.v-application--wrap{
  min-height: min-content;
};

body::-webkit-scrollbar-track
{
	box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
};

body::-webkit-scrollbar
{
	width: 12px;
	background-color: #F5F5F5;
};

body::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #FE6D73;
};

.v-application a{
      color: inherit !important; 
};

</style>


<style>

html:lang("fa") {
  font-family: "shabnam";
};

html:lang("en"){
  font-family: "Roboto light"; 
};


</style>
