function calcular(){
	var num1=Number(document.getElementById('basico').value);
	

if (casado.checked) {
	var res1=5*num1/100;
	document.getElementById('rpacivil').value=res1;

}	

if (divorciado.checked) {
	var res1=3*num1/100;
	document.getElementById('rpacivil').value=res1;

}

if (viudo.checked) {
	var res1=2*num1/100;
	document.getElementById('rpacivil').value=res1;
}	

if (soltero.checked) {
	var res1=1*num1/100;
	document.getElementById('rpacivil').value=res1;
}	

/*-----hijos----------*/

if (hijo1.checked) {
	var res2=5*num1/100;
	document.getElementById('rpahijo').value=res2;
}

if (hijo3.checked) {
	var res2=6*num1/100;
	document.getElementById('rpahijo').value=res2;
}	

if (hijo5.checked) {
	var res2=7*num1/100;
	document.getElementById('rpahijo').value=res2;
}	

/*-----descuento----------*/

var res3=0;
var res4=0;

if (cbox1.checked) {
	var res3=num1*0.05;
}

if (cbox2.checked) {
	var res4=num1*0.13;
}

t33=res3+res4;
document.getElementById('descuento').value=t33;

var re1=Number(document.getElementById('rpacivil').value);
var re2=Number(document.getElementById('rpahijo').value);
var re3=Number(document.getElementById('descuento').value);

sum=(num1+re1+re2)-re3;
document.getElementById('neto').value=sum;

}



