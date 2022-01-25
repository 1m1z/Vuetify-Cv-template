<template>
  <v-app>
<!-- content -->
    <v-main >
       <v-container>
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

export default {
  name: 'App',
  components:{
    Menu
  },

  data: () => ({
    
  }),

};

</script>

<style lang="scss">
*{
  font-family: cursive; 
};

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
}

body::-webkit-scrollbar
{
	width: 12px;
	background-color: #F5F5F5;
}

body::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #FE6D73;
}
</style>
