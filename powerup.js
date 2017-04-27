TrelloPowerUp.initialize({
  'card-badges' : function(t, card) {
    t.card('attachments').then(function(attachments){
      console.log(attachments);
      if(!attachments || !attachments.length) return [];

      return attachments.map(function(attachment){
        var url = new window.URL(attachment.url);
        return {
          icon: 'https://api.faviconkit.com/icons/' + url.hostname + '/144.png'
        }
      });
    })
  },

  'format-url' : function(t, options) {
    return {
      icon: 'https://api.faviconkit.com/icons/apple.com/144.png',
      text: options.url
    }
  }
});