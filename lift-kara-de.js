'use strict';

const LKD = (el,text,attr,val) => {

	let button = document.createElement(el);
	button.innerText = text;
	button.setAttribute(attr, val);
	button.type = 'button';

	const STYLE = {
		position : 'fixed',
		right : '2%',
		bottom : '2%',
		opacity : '0',
		transform : 'translateY(100%)',
		visibility : 'hidden'
	}
	Object.assign(button.style, STYLE);
	document.body.append(button);

	window.addEventListener('scroll', () => {
		if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
			const STYLE = {
				opacity : '1',
				transform : 'translateY(0)',
				visibility : 'visible'
			}
			Object.assign(button.style, STYLE);
		}else{
			const STYLE = {
				opacity : '0',
				transform : 'translateY(100%)',
				visibility : 'hidden'
			}
			Object.assign(button.style, STYLE);
		}
	});

	let scrollToTop = function() {

	  var scrollStep = -window.scrollY / (scrollDuration / 10);

	  var scrollInterval = setInterval(function(){
	    if ( window.scrollY != 0 ) {
	        window.scrollBy( 0, scrollStep );
	    }
	    else clearInterval(scrollInterval); 
	 },10);
	}

	let scrollDuration = 1000;

	button.addEventListener("click", scrollToTop.bind(scrollDuration));

	//window.addEventListener('load', LKD);
	
}

