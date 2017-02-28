var text = document.createElement('span')

function showText(target, message, index, interval) {    
  if (index < message.length) { 
  	text = document.createElement('span')
    text.innerHTML = message[index++]
    document.querySelector(target).appendChild(text) 
    setTimeout(function () { showText(target, message, index, interval); }, interval) 
  } 
}
    
showText("#message", "Printing this out at a set interval.", 0, 500)