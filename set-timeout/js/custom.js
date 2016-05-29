var el = document.querySelector('.one'),
el2 = document.querySelector('.two'),
el3 = document.querySelector('.three');

Velocity(el, {opacity:0}, {display:'none'});
Velocity(el2, {opacity:0}, {display:'none'});
Velocity(el3, {opacity:0}, {display:'none'});

setTimeout( function () {
	Velocity(el, {opacity:1}, {display:'block'});
}, 3000);

setTimeout( function () {
	Velocity(el2, {opacity:1}, {display:'block'});
}, 5000);

setTimeout( function () {
	Velocity(el3, {opacity:1}, {display:'block'});
}, 7000);