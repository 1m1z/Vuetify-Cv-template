<template>
<v-app>
    <v-row class="pt-7">
        <v-col cols="12" xl="2" lg="2" md="2" sm="2" xs="12">
            <div class="col-sm-12 col-xs-12">
            <img class="rounded-pill" src="@../../../src/assets/Face2.png" alt="" width="100px">
            </div>
        </v-col>

        <v-col >
            <div>
                <v-card class="mt-2 rounded-xl" hover>
                    <v-card-subtitle class="secondary rounded-b">{{$t('resume.information.name1')}}</v-card-subtitle>
                    <v-card-text><p class="mt-4 title">{{$t('resume.information.name2')}}</p></v-card-text>
                </v-card>

                <v-card class="mt-2  rounded-xl" hover>
                    <v-card-subtitle class="secondary rounded-b">{{$t('resume.information.date1')}}</v-card-subtitle>
                    <v-card-text><p class="mt-4 title">{{$t('resume.information.date2')}}</p></v-card-text>
                </v-card>

                <v-card class="mt-2  rounded-xl" hover>
                    <v-card-subtitle class="secondary rounded-b">{{$t('resume.information.loc1')}}</v-card-subtitle>
                    <v-card-text><p class="mt-4 title">{{$t('resume.information.loc2')}}</p></v-card-text>
                </v-card>

                <v-card class="mt-2  rounded-xl" hover>
                    <v-card-subtitle class="secondary rounded-b">{{$t('resume.information.mail1')}}</v-card-subtitle>
                    <v-card-text><p class="mt-4 title">{{$t('resume.information.mail2')}}</p></v-card-text>
                </v-card>
                <a href="https://www.linkedin.com/in/amirali-golru-1ba1661b4/" target="_blank">
                <v-card class="mt-2  rounded-xl" hover>
                    <v-card-subtitle class="secondary rounded-b">{{$t('resume.information.linked1')}}</v-card-subtitle>
                    <v-card-text><p class="mt-4 title">{{$t('resume.information.linked2')}}</p></v-card-text>
                </v-card>
                </a>
            </div>
        </v-col>


        <v-col >
            <div >
                <v-card class="mt-2  rounded-xl" hover>
                    <v-card-subtitle class="secondary rounded-b">{{$t('resume.information.phnum1')}}</v-card-subtitle>
                    <v-card-text><p class="mt-4 title">{{$t('resume.information.phnum2')}}</p></v-card-text>
                </v-card>

                <v-card class="mt-2  rounded-xl" hover>
                    <v-card-subtitle class="secondary rounded-b">{{$t('resume.information.site1')}}</v-card-subtitle>
                    <v-card-text><p class="mt-4 title">{{$t('resume.information.site2')}}</p></v-card-text>
                </v-card>

                <v-card class="mt-2  rounded-xl" hover>
                    <v-card-subtitle class="secondary rounded-b">{{$t('resume.information.jobt1')}}</v-card-subtitle>
                    <v-card-text><p class="mt-4 title">{{$t('resume.information.jobt2')}}</p></v-card-text>
                </v-card>

                <v-card class="mt-2  rounded-xl" hover>
                    <v-card-subtitle class="secondary rounded-b">{{$t('resume.information.khedmat1')}}</v-card-subtitle>
                    <v-card-text><p class="mt-4 title">{{$t('resume.information.khedmat2')}}</p></v-card-text>
                </v-card>

                <v-card class="mt-2  rounded-xl" hover>
                    <v-card-subtitle class="secondary rounded-b">{{$t('resume.information.rell1')}}</v-card-subtitle>
                    <v-card-text><p class="mt-4 title">{{$t('resume.information.rell2')}}</p></v-card-text>
                </v-card>
            </div>
        </v-col>
    </v-row>
    
</v-app>
</template>

<script scoped>
export default {
    name:'Info',

data: ()=> {
    return{

    }
  }
}
</script>

<style lang="scss">

</style>