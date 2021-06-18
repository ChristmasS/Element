let a = 0;
function check(){
	let lic = document.getElementById('lic_1');
	let rad = document.getElementById('inp_1');
	rad.checked = 'checked';

	let disabled_2 = document.getElementById('lic_2');
	let disabled_3 = document.getElementById('lic_3');
	if(rad.checked){
		lic.style.background = 'hsl(194, 100%, 94%)';
		lic.style.border = '1px solid hsl(194, 100%, 80%)';

		disabled_2.style.background = 'hsl(126, 0%, 96%)';
		disabled_3.style.background = 'hsl(126, 0%, 96%)';
		disabled_2.style.border = 'none';
		disabled_3.style.border = 'none';
	}
	a = 0;
}
function check_2(){
	let lic = document.getElementById('lic_2');
	let rad = document.getElementById('inp_2');
	rad.checked = 'checked';

	let disabled_1 = document.getElementById('lic_1');
	let disabled_3 = document.getElementById('lic_3');
	if(rad.checked){
		lic.style.background = 'hsl(194, 100%, 94%)';
		lic.style.border = '1px solid hsl(194, 100%, 80%)';

		disabled_1.style.background = 'hsl(126, 0%, 96%)';
		disabled_3.style.background = 'hsl(126, 0%, 96%)';
		disabled_1.style.border = 'none';
		disabled_3.style.border = 'none';
	}
	a = 1;
}
function check_3(){
	let lic = document.getElementById('lic_3');
	let rad = document.getElementById('inp_3');
	rad.checked = 'checked';

	let disabled_1 = document.getElementById('lic_1');
	let disabled_2 = document.getElementById('lic_2');
	if(rad.checked){
		lic.style.background = 'hsl(194, 100%, 94%)';
		lic.style.border = '1px solid hsl(194, 100%, 80%)';

		disabled_1.style.background = 'hsl(126, 0%, 96%)';
		disabled_2.style.background = 'hsl(126, 0%, 96%)';
		disabled_1.style.border = 'none';
		disabled_2.style.border = 'none';
	}
	a = 2;
}
function check_total(){
	let car = document.getElementById('select_');
	let val = car.value;

	let b = document.getElementById('total');
	switch(a){
		case 0:{
			b.innerHTML = '$' + ('13' * val);
			break;
		}
		case 1:{
			b.innerHTML = '$' + ('22' * val);
			break;	
		}
		case 2:{
			b.innerHTML = '$' + ('34' * val);
			break;
		}
	}
}