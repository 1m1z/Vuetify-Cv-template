<template>
    <v-app>
        <div class="form pa-xl-16 pa-lg-16 pa-md-16 pa-sm-1 pa-xs-1 pa-3 rounded-xl contactform" id="form">
            <p>if i can do somthing for you, please dont be shy ;)</p>
            <v-form class="px-2"
                    v-model="valid"
                    ref="form"
                    action="https://formspree.io/f/mjvlwgyz"
                    method="POST"
            >
                <v-row>
                    <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                        <v-text-field
                            label="name and family"
                            placeholder="Amir"
                            outlined
                            name="name"
                            v-model="firstname"
                            :rules="nameRules"
                            :counter="10"
                            required
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="12">
                        <v-text-field
                            label="email"
                            placeholder="example@mail.com"
                            outlined
                            type="email"
                            name="email"
                            required
                            v-model="email"
                            :rules="emailRules"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="12">
                        <v-text-field
                            label="phone number"
                            placeholder="09198564851"
                            outlined
                            type="number"
                            required
                            name="phonenumber"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field
                            label="subject"
                            placeholder="hiring front-end developer"
                            outlined
                            required
                            name="subject"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-textarea
                            outlined
                            name="message"
                            label="text"
                            required
                        ></v-textarea>
                    </v-col>
                </v-row>
                <v-btn class="success" type="submit" x-large @click="alertshowed">
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
                        <a href="https://www.instagram.com/amiraliglr/"><v-icon size="100">mdi-instagram</v-icon></a>
                        <h3>instagram</h3>
                        <p>@amiraliglr</p>
                    </v-col>
                    <v-col>
                        <a href="https://www.linkedin.com/in/amirali-golru-1ba1661b4/"><v-icon size="100">mdi-linkedin</v-icon></a>
                        <h3>linkedin</h3>
                        <p>@amiraliglr</p>
                    </v-col>
                    <v-col>
                        <a href="https://web.whatsapp.com/0919830453"><v-icon size="100">mdi-whatsapp</v-icon></a>
                        <h3>whatsapp</h3>
                        <p>@amiraliglr</p>
                    </v-col>
                    <v-col>
                        <a href="https://t.me/amir011010"><v-icon size="100">mdi-send</v-icon></a>
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
    metaInfo: {
        title: 'contact me | تماس با من'
    },
    data() {
        return {
            alertshow:false,
            valid: true,
            firstname: '',
            lastname: '',
            nameRules: [
            v => !!v || 'Name is required',
            v => v.length <= 10 || 'Name must be less than 10 characters',
            ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        }
    },
    methods: {
        alertshowed(){
            this.alertshow = true;
            window.location.reload();
        }
    },
    watch:{
        alertshow(){
            this.$refs.form.reset();
        }
    }
}


</script>


<style lang="scss">
a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
 };

 @media screen and (max-width: 512px){
  .form{
    margin-top:80px;
  }
}
</style>