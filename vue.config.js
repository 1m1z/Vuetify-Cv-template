module.exports = {
  pwa: {
    name: 'Amirali Golru',
    icon: 
      {
        "src": "@/src/assets/Logo/Face2.png",
        "sizes": "192x192",
        "type": "image/png"
      },
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    // configure the workbox plugin
    
  },
  transpileDependencies: [
    'vuetify'
  ],

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
