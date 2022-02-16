<template>
    <div id="postdiv">
        <v-container id="post1">
            <h1>{{$t('blog.posts.post1.h1')}}</h1>
            <v-img  src="../../assets/Articles/vue.jpeg"></v-img>
            <p>{{$t('blog.posts.post1.p1')}}</p>
            <h3>{{$t('blog.posts.post1.h2')}}</h3>
            <p>{{$t('blog.posts.post1.p2')}}</p>
            <h3>{{$t('blog.posts.post1.h3')}}</h3>
            <ul>
                <li>{{$t('blog.posts.post1.li1')}}</li>
                <li>{{$t('blog.posts.post1.li2')}}</li>
                <li>{{$t('blog.posts.post1.li3')}}</li>
                <li>{{$t('blog.posts.post1.li4')}}</li>
                <li>{{$t('blog.posts.post1.li5')}}</li>
                <li>{{$t('blog.posts.post1.li6')}}</li>
                <li>{{$t('blog.posts.post1.li7')}}</li>
                <li>{{$t('blog.posts.post1.li8')}}</li>
                <li>{{$t('blog.posts.post1.li9')}}</li>
                <h3>{{$t('blog.posts.post1.h4')}}</h3>
                <p>{{$t('blog.posts.post1.p3')}}</p>
                <p>{{$t('blog.posts.post1.p4')}}</p>
            </ul>
        </v-container>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'Post1',
}
</script>
<style lang="scss" scoped>
* {
    font-size: 30px;
};

@media screen and (max-width: 512px){
  #post1{
    margin-top:80px;
};
h1, p,li{
    font-size: 20px;
}
}
</style>