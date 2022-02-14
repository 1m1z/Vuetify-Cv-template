module.exports = {
  pwa: {
    name: 'Amirali Golru',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'dev/sw.js',
      // ...other Workbox options...
    },
    icon: [
      {
        "src": "/src/assets/Logo/pwa/code1",
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
