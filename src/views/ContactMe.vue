<template>
    <v-app>
        <div class="form rounded-xl" id="form">
            <v-form>
                <v-row>
                    <v-col>
                        <v-text-field
                            label="name and family"
                            placeholder="Placeholder"
                            outlined
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field
                            label="email"
                            placeholder="Placeholder"
                            outlined
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                            label="phone number"
                            placeholder="Placeholder"
                            outlined
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field
                            label="subject"
                            placeholder="Placeholder"
                            outlined
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-textarea
                            outlined
                            name="input-7-4"
                            label="text"
                        ></v-textarea>
                    </v-col>
                </v-row>
                <v-btn class="success " x-large @click="alertshowed">
                    Send
                </v-btn>
                <v-alert class="mt-2" v-if="alertshow"
                    prominent
                    type="success"
                    transition="fade-transition"
                >sucsessful sended</v-alert>
            </v-form>


            
            <div class="text-center pt-16 ">
                <hr>
                <h3 class="py-2">if you want you can text me in other social media :)</h3>
                <v-row>
                    <v-col>
                        <a href="#"><v-icon size="100">mdi-instagram</v-icon></a>
                        <h3>instagram</h3>
                        <p>@amiraliglr</p>
                    </v-col>
                    <v-col>
                        <a href="#"><v-icon size="100">mdi-linkedin</v-icon></a>
                        <h3>linkedin</h3>
                        <p>@amiraliglr</p>
                    </v-col>
                    <v-col>
                        <a href="#"><v-icon size="100">mdi-whatsapp</v-icon></a>
                        <h3>whatsapp</h3>
                        <p>@amiraliglr</p>
                    </v-col>
                    <v-col>
                        <a href="#"><v-icon size="100">mdi-send</v-icon></a>
                        <h3>telegram</h3>
                        <p>@amiraliglr</p>
                    </v-col>
                </v-row>
            </div>
        </div>
    <div>
</div>
</v-app>
</template>

<script>
export default {
    name:'ContactMe',
    data() {
        return {
            alertshow:false,
        }
    },

    methods: {
        alertshowed(){
            this.alertshow = true;
            window.location.reload();
        }
    },
}

</script>


<style lang="scss">
a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
 };

.form{
    padding: 200px 200px 200px 200px;
    background-color: #FE6D73;
}

</style>