import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
    dark :true,
    themes: {
    light: {
        primary: "#227C9D", // #E53935
        secondary: "#17C3B2", // #FFCDD2
        info: "#FFCB77",
        danger:"#FE6D73",
        accent: "#FFCB77", // #3F51B5
    },
    dark: {
        primary: "#00b4d8", // #E53935
        secondary: "#90e0ef", // #FFCDD2
        info: "#FF9F1C",
        danger:"#E71D36",
        accent: "#FFCB77", // #3F51B5
    },
    },
},
});
