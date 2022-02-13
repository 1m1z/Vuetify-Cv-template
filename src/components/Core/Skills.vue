<template>
    <v-app>
        <v-row>
            <v-col cols="12" xl="3" lg="3" md="3" sm="6" xs="6">
                <div class="text-center danger--text ma-2">
                    <v-icon color="danger" x-large>mdi-language-javascript</v-icon>
                    <h2>Javascript</h2>
                    <v-progress-linear class="mt-4"
                        color="danger"
                        rounded
                        value="30"
                        stream
                        height="20px"
                        
                    >
                    30%
                    </v-progress-linear>
                </div>

                <div class="text-center danger--text mt-14 ma-2">
                    <v-icon color="danger" x-large>mdi-bootstrap</v-icon>
                    <h2>Bootstrap</h2>
                    <v-progress-linear class="mt-4"
                        color="danger"
                        rounded
                        value="90"
                        stream
                        height="20px"
                    >
                    90%
                    </v-progress-linear>
                </div>

                <div class="text-center danger--text mt-14 ma-2">
                    <v-icon color="danger" x-large>mdi-ip-network</v-icon>
                    <h2>Network+</h2>
                    <v-progress-linear class="mt-4"
                        color="danger"
                        rounded
                        value="40"
                        stream
                        height="20px"
                    >
                    40%
                    </v-progress-linear>
                </div>
            </v-col>

            <v-col cols="12" xl="3" lg="3" md="3" sm="6" xs="6">
                <div class="text-center danger--text ma-2 ">
                    <v-icon color="danger" x-large>mdi-language-css3</v-icon>
                    <h2>css3</h2>
                    <v-progress-linear class="mt-4"
                        color="danger"
                        rounded
                        value="90"
                        stream
                        height="20px"
                    >
                    90%
                    </v-progress-linear>
                </div>

                <div class="text-center danger--text mt-14 ma-2">
                    <v-icon color="danger" x-large>mdi-tailwind</v-icon>
                    <h2>Tailwind</h2>
                    <v-progress-linear class="mt-4"
                        color="danger"
                        rounded
                        value="70"
                        stream
                        height="20px"
                    >
                    70%
                    </v-progress-linear>
                </div>

                <div class="text-center danger--text mt-14 ma-2">
                    <v-icon color="danger" x-large>mdi-laptop</v-icon>
                    <h2>CEH</h2>
                    <v-progress-linear class="mt-4"
                        color="danger"
                        rounded
                        value="30"
                        stream
                        height="20px"
                    >
                    30%
                    </v-progress-linear>
                </div>
            </v-col>

            <v-col cols="12" xl="3" lg="3" md="3" sm="6" xs="6">
                <div class="text-center danger--text ma-2">
                    <v-icon color="danger" x-large>mdi-vuejs</v-icon>
                    <h2>Vue js</h2>
                    <v-progress-linear class="mt-4"
                        color="danger"
                        rounded
                        value="60"
                        stream
                        height="20px"
                    >
                    60%
                    </v-progress-linear>
                </div>

                <div class="text-center danger--text mt-14 ma-2">
                    <v-icon color="danger" x-large>mdi-vuetify</v-icon>
                    <h2>Vuetify</h2>
                    <v-progress-linear class="mt-4"
                        color="danger"
                        rounded
                        value="90"
                        stream
                        height="20px"
                    >
                    90%
                    </v-progress-linear>
                </div>

                <div class="text-center danger--text mt-14 ma-2">
                    <v-icon color="danger" x-large>mdi-server-security</v-icon>
                    <h2>securtiy+</h2>
                    <v-progress-linear class="mt-4"
                        color="danger"
                        rounded
                        value="10"
                        stream
                        height="20px"
                    >
                    10%
                    </v-progress-linear>
                </div>
            </v-col>

            <v-col cols="12" xl="3" lg="3" md="3" sm="6" xs="6">
                <div class="text-center danger--text ma-2">
                    <v-icon color="danger" x-large>mdi-wordpress</v-icon>
                    <h2>Wordpress</h2>
                    <v-progress-linear class="mt-4"
                        color="danger"
                        rounded
                        value="99"
                        stream
                        height="20px"
                    >
                    99%
                    </v-progress-linear>
                </div>
                <div class="text-center danger--text mt-14 ma-2">
                    <v-icon color="danger" x-large>mdi-language-html5</v-icon>
                    <h2>HTML</h2>
                    <v-progress-linear class="mt-4"
                        color="danger"
                        rounded
                        value="100"
                        stream
                        height="20px"
                    >
                    100%
                    </v-progress-linear>
                </div>

                <div class="text-center danger--text mt-14 ma-2">
                    <v-icon color="danger" x-large>mdi-sitemap-outline</v-icon>
                    <h2>HTTP</h2>
                    <v-progress-linear class="mt-4"
                        color="danger"
                        rounded
                        value="10"
                        stream
                        height="20px"
                    >
                    10%
                    </v-progress-linear>
                </div>
            </v-col>
            

            
        </v-row>

        <h1 class="text-center info--text pt-16 pb-12">My Language</h1>

        <v-row>
            <v-col>
                <v-card class="mt-2  rounded-xl" hover>
                    <v-card-subtitle class="info rounded-b">persian</v-card-subtitle>
                    <v-card-text><p class="mt-4 title">native</p></v-card-text>
                </v-card>
            </v-col>

            <v-col>
                <v-card class="mt-2  rounded-xl" hover>
                    <v-card-subtitle class="info rounded-b">english</v-card-subtitle>
                    <v-card-text><p class="mt-4 title">50% 50%</p></v-card-text>
                </v-card>
            </v-col>
        </v-row>
        
    </v-app>
</template>

<script>
export default {
    name: 'Skills',
}
</script>

<style lang="scss">

</style>