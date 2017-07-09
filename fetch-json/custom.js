fetch('data.json')
.then(
  function (response) {
    if (response.status !== 200) {
      console.log('Looks like there was a problem: ' + response.status)
      return
    }
    // Examine the text in the response
    response.json()
    .then(function (data) {
      // Build up string with new content.
      const newContent = ''
      for (var i = 0; i < data.artists.length; i++) {
        newContent += '<div>'
        newContent += '<img src="' + data.artists[i].work + '" '
        newContent += 'alt="' + data.artists[i].title + ' ">'
        newContent += '<p><strong>' + data.artists[i].name + '</strong><br>'
        newContent += data.artists[i].title + '<br><span>'
        newContent += data.artists[i].medium + '</span></p>'
        newContent += '</div>'
      }

      // Update the page with the new content
      document.getElementById('content').innerHTML = newContent
    })
  }
)
.catch( function(err) {
  console.log('Fetch Error: ' + err)
})
