//your JS code here. If required.
let root = document.querySelector(':root');
const f_size = document.querySelector('#fontsize');
const f_color = document.querySelector('#fontcolor');
const form = document.querySelector('#myform');

let size = null;
let color = null;

f_size.addEventListener('change', ()=>{
	// alert(f_size.value);
	size = f_size.value;
})
f_color.addEventListener('change', ()=>{
	// alert(f_size.value);
	color = f_color.value;
})

form.addEventListener('submit', (e)=>{
	e.preventDefault();
	document.cookie = 'fontsize='+size+'; expires=18 Dec 2025 12:00:00 UTC;path=/'
	document.cookie = 'fontcolor='+color+'; expires=18 Dec 2025 12:00:00 UTC;path=/'
	let s = getCookies('fontsize');
	let c = getCookies('fontcolor');
	console.log(s, c);
	root.style.setProperty('--fontsize', s+"px");
	root.style.setProperty('--fontcolor', c);
})

let s = getCookies('fontsize');
let c = getCookies('fontcolor');
console.log(s, c);
root.style.setProperty('--fontsize', s+"px");
root.style.setProperty('--fontcolor', c);


function getCookies(cName){
	let name = cName + '=';
	let decoded = decodeURIComponent(document.cookie);
	let ca = decoded.split(';');
	for(let i = 0; i<ca.length; i++){
		let c = ca[i];
		while(c.charAt(0)==' '){
			c=c.substring(1);
	 	} 
		if(c.indexOf(name)==0){
			return c.substring(name.length, c.length);
		}
	}
	return '';
}
