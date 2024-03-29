TrelloPowerUp.initialize({
  'card-badges' : function(t, card) {
    return t.card('attachments')
     .get('attachments')
     .then(function(attachments) {
      return (attachments || []).map(function(attachment){
        var url = new URL(attachment.url);
        return {
          icon: 'https://api.faviconkit.com/' + url.hostname + '/32',
          color: null
        }
      });
    })
  },

  'format-url' : function(t, options) {
    var url = new URL(options.url);
    console.log('format-url', url);
    return {
      icon: 'https://api.faviconkit.com/' + url.hostname + '/32',
      text: options.url
    }
  }
});
