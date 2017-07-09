fetch('data.html')
.then(
  function (response) {
    if (response.status !== 200) {
      console.log('Looks like there was a problem: ' + response.status)
      return
    }
    // Examine the text in the response
    response.text()
    .then(function (data) {
      document.querySelector('#content').innerHTML = data
    })
  }
)
.catch( function(err) {
  console.log('Fetch Error: ' + err)
})
