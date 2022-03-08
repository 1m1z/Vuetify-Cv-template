module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/Vuetify-Cv-template/" : "/",
  publicPath:'/Vuetify-Cv-template/',
  pwa: {
    name: 'Amirali Golru',
    shortName:'Amir Web App',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxOptions: {
    skipWaiting: true
    },
    iconPaths: {
      favicon32: 'public/img/icons/favicon-32x32.png',
   },
    icon: [
      {
        "src": "src/assets/Logo/pwa/code1",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        'src': './src/assets/Logo/pwa/code2',
        'sizes': '512x512',
        'type': 'image/png',
      },
      {
        'src': '@/src/assets/Logo/pwa/code2',
        'sizes': '512x512',
        'type': 'image/png',
      },
      
      
    ],
    
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
      enableBridge: false
    }
  }
}
