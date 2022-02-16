<template>
    <v-container id="blogcon">
        <div>
            <h1 class="text-center primary--text">{{$t('blog.blogshow.blogtitr')}}</h1>
        </div>
        <div>
            <v-row>
                <v-col>
                    <v-card
                    class="mx-auto my-12"
                    max-width="374"
                    >
    <v-img
      height="250"
      src="../assets/Articles/vuejs.jpg"
    ></v-img>

    <v-card-title>{{$t('blog.blogshow.post1.title')}}</v-card-title>
    <v-card-text>
      <div class="my-4 text-subtitle-1">
        {{$t('blog.blogshow.post1.subject')}}
      </div>

      <div>{{$t('blog.blogshow.post1.type')}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
    <v-card-text>
      <v-chip-group
        column
      >
        <v-chip color="green" :to="{name:'Post1'}">VUE</v-chip>

        <v-chip color="blue" :to="{name:'Post1'}">VUETIFY</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        :to="{ name: 'Post1'}"
      >
        {{$t('blog.blogshow.blogbtn')}}
      </v-btn>
    </v-card-actions>
  </v-card>
</v-col>
</v-row>
</div>
</v-container>
</template>

<script>
export default {
    name: 'Blog',
    metaInfo: {
        title: 'blog | بلاگ'
    },
    
}
</script>


<style lang="scss">
@media screen and (max-width: 512px){
  #blogcon{
    margin-top:70px;
  }
}
</style>