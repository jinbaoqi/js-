Function.prototype.bind = Function.prototype.bind||function(thisArg){
	var fn = this
	var slice = Array.prototype.slice
	var args = slice.call(arguments,1)

	return function(){
		return fn.apply(thisArg,args.concat(slice.call(arguments)))
	}
}