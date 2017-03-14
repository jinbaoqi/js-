for(var i=0;i<5;i++){
	setTimeout((function(e) {
		console.log(e)
	})(i), i*1000)
}

for(var i =0;i<5;i++){
	(
		function(e){
			setTimeout(function(){
				console.log(e)
			},e*1000)//此处e,i均可
		}
	)(i)
}