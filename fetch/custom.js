fetch('data.json').then((res) => {
  if (res.status !== 200) {
    console.log('Looks like there was a problem: ' + res.status)
    return
  }
  // Examine the text in the response
  res.json().then((data) => {
    // Build up string with new content.
    let newContent = ''

    data.artists.map((artist) => {
      newContent += `<div><img src="${artist.work}" alt="${artist.title}">
        <p><strong>${artist.name}</strong><br>${artist.title}<br>
        <span>${artist.medium}</span></p></div>`
    })

    // Update the page with the new content
    document.getElementById('content').innerHTML = newContent
  })
}).catch((err) => {
  console.log('Fetch Error: ' + err)
})
