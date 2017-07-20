function buildfunc() {
	var arr = [];

	for(var i = 0; i < 3 ; i++){
		arr.push( function() {

				console.log(i);
			}
		)
	}

	return arr ;
}

var fz = buildfunc();

fz[0]();
fz[1]();
fz[2]();
