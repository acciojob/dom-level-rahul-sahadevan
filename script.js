//your JS code here. If required.
let n = 1;

const ele = document.getElementsByTagName("li");
console.log(ele.length);

for(let i =0;i<ele.length;i++){
	let e = ele[i];
	if(e.id === "level"){
		break;
	}
	n++;
}
console.log(alert(n));