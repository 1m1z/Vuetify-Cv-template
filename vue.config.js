module.exports = {
  pwa: {
    name: 'Amirali Golru',
    icon: [
      {
        "src": "@/src/assets/Logo/Face2.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        'src': '@/src/assets/Logo/Face2.png',
        'sizes': '512x512',
        'type': 'image/png',
      },
    ],
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
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
