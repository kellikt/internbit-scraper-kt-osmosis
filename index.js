const osmosis = require('osmosis');
osmosis
    .get('https://www.google.co.in/search?q=computer%science%internships%near%me')
    .find('.g')               // Find all outer div tags
    .set({
      'title': '.r',          // Extract the properties out of it which are needed
      'url':   'cite',          // Similar to DOM extraction .class/tag/#id/@property can be used to get values
      'link':  '.r @href',
      'text':  '.st'
    })
    .data(function(data) {
      console.log(data);      // Data here would be each search result with the properties that we set above
    })
    .error(console.log)
    .debug(console.log);
