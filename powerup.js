TrelloPowerUp.initialize({
  'card-badges' : function(t, card) {
    return [{
      icon: 'https://api.faviconkit.com/icons/apple.com/144.png'
    }]
  },

  'format-url' : function(t, options) {
    return {
      icon: 'https://api.faviconkit.com/icons/apple.com/144.png',
      text: options.url
    }
  }
});